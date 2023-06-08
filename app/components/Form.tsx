'use client';

import { useCallback } from 'react';
import Button from './Button';
import Logo from './Logo';

interface FormProps {
  onSubmit: () => void;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Form: React.FC<FormProps> = ({ onSubmit, body, footer, actionLabel, disabled }) => {
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  return (
    <div className="w-full md:w-3/4 flex flex-col justify-center">
      <div className="flex justify-center mb-5">
        <Logo />
      </div>
      <div className="relative p-6 flex-auto">{body}</div>
      <div className="flex flex-col gap-2 p-6">
        <div className="flex flex-row items-center gap-4 w-full">
          <Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
        </div>
        {footer}
      </div>
    </div>
  );
};

export default Form;
