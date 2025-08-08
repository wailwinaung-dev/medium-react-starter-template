import { useLogin } from '@/api/queries/auth.query';
import { loginSchema } from '@/api/schema/auth.schema';
import { FieldInfo } from '@/components/tanstack-form/field-info';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@tanstack/react-form';
import { Bouncy } from 'ldrs/react';
import { useNavigate } from 'react-router';

export function LoginForm() {
  const { mutate, isPending } = useLogin();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    onSubmit: async ({ value }) => {
      mutate(value, {
        onSuccess: () => {
          navigate('/');
        }
      });
    },
    validators: {
      onChange: loginSchema
    }
  });
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <div className="flex flex-col gap-6">
              <form.Field name="email">
                {(field) => (
                  <>
                    <div className="grid gap-3">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="text"
                        placeholder="m@example.com"
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                      />
                      <FieldInfo field={field} />
                    </div>
                  </>
                )}
              </form.Field>

              <form.Field name="password">
                {(field) => (
                  <>
                    <div className="grid gap-3">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="*********"
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                      />
                      <FieldInfo field={field} />
                    </div>
                  </>
                )}
              </form.Field>

              <form.Subscribe selector={(state) => [state.canSubmit]}>
                {([canSubmit]) => (
                  <div className="flex flex-col gap-3">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={!canSubmit}
                    >
                      {isPending ? (
                        <Bouncy size="25" speed="1.75" color="white" />
                      ) : (
                        'Login'
                      )}
                    </Button>
                  </div>
                )}
              </form.Subscribe>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
