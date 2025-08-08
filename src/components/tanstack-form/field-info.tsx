import { type AnyFieldApi } from '@tanstack/react-form';

export function FieldInfo({ field }: { field: AnyFieldApi }) {
  if (field.state.meta.errors.length === 0) return undefined;

  return (
    <span className="text-red-500 text-xs">
      {field.state.meta.isTouched && !field.state.meta.isValid
        ? field.state.meta.errors.map((err) => err.message).join(', ')
        : null}
      {/* {field.state.meta.isValidating ? 'Validating...' : null} */}
    </span>
  );
}
