import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { DatePicker } from '@/components/ui/date-picker';
import { Search, X } from 'lucide-react';
import { IconFileDownload } from '@tabler/icons-react';
import { BtnWithTooltip } from '@/components/ui/btn-with-tooltip';
import { useForm } from '@tanstack/react-form';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'react-router';
import axiosInstance from '@/api/axios/axios';
import { format } from 'date-fns';

export function TransactionsFilterForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const form = useForm({
    defaultValues: {
      search: searchParams.get('search') || '',
      status: searchParams.get('status') || '',
      startDate: searchParams.get('startDate')
        ? new Date(searchParams.get('startDate')!)
        : undefined,
      endDate: searchParams.get('endDate')
        ? new Date(searchParams.get('endDate')!)
        : undefined
    },
    onSubmit: ({ value }) => {
      if (value.search) searchParams.set('search', value.search);
      if (value.status) searchParams.set('status', value.status);
      if (value.startDate)
        searchParams.set('startDate', value.startDate.toISOString());
      if (value.endDate)
        searchParams.set('endDate', value.endDate.toISOString());

      setSearchParams(searchParams);
    }
  });

  const handleExport = async () => {
    try {
      const response = await axiosInstance.get('/transactions/export', {
        responseType: 'blob', // 🔥 Important for binary file
        headers: {
          Accept:
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        },
        params: {
          search: searchParams.get('search'),
          status: searchParams.get('status'),
          startDate: searchParams.get('startDate'),
          endDate: searchParams.get('endDate')
        }
      });

      const fileName = `transactions-${format(new Date(), 'yyyy-MM-dd:HH:mm:ss')}.xlsx`;

      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="flex flex-wrap items-end gap-4">
      {/* Search Filter */}
      <form.Field name="search">
        {(field) => (
          <Input
            placeholder="Enter trxn reference No"
            value={field.state.value}
            onChange={(event) => field.handleChange(event.target.value)}
            className="w-[200px]"
          />
        )}
      </form.Field>

      {/* Start Date Filter */}
      <form.Field name="startDate">
        {(field) => (
          <DatePicker
            placeholder="Start Date"
            selectedDate={field.state.value}
            setSelectedDate={field.handleChange}
          />
        )}
      </form.Field>

      {/* End Date Filter */}
      <form.Field name="endDate">
        {(field) => (
          <DatePicker
            placeholder="End Date"
            selectedDate={field.state.value}
            setSelectedDate={field.handleChange}
          />
        )}
      </form.Field>

      {/* Status Filter */}
      <form.Field name="status">
        {(field) => (
          <Select value={field.state.value} onValueChange={field.handleChange}>
            <SelectTrigger id="status-filter" className="w-[180px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="COMPLETED">Completed</SelectItem>
              <SelectItem value="FAILED">Failed</SelectItem>
              <SelectItem value="PENDING">Pending</SelectItem>
            </SelectContent>
          </Select>
        )}
      </form.Field>

      {/* Filter and Reset Buttons */}
      <div className="flex gap-2 mt-auto">
        <BtnWithTooltip
          tooltip="Apply Filters"
          onClick={form.handleSubmit}
          className="cursor-pointer"
        >
          <Search className="h-4 w-4" />
        </BtnWithTooltip>
        <BtnWithTooltip
          tooltip="Reset Filters"
          variant="outline"
          onClick={() => {
            form.reset();

            setSearchParams({});
          }}
          className="cursor-pointer"
        >
          <X className="h-4 w-4" />
        </BtnWithTooltip>
        <BtnWithTooltip
          tooltip="Download Excel"
          variant="secondary"
          onClick={handleExport}
          className="cursor-pointer bg-green-500 hover:bg-green-600"
        >
          <IconFileDownload className="h-4 w-4 text-white" />
        </BtnWithTooltip>
      </div>
    </div>
  );
}
