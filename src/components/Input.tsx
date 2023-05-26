import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';
import cx from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  err?: string;
  label: string;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, Props>(
  ({ err, label, ...props }, _myref) => {
    return (
      <div className='flex w-full flex-col items-stretch gap-y-2'>
        <label htmlFor={props.name} className='capitalize'>
          {props.name} :
        </label>
        <input
          type='text'
          ref={_myref}
          {...props}
          className={cx('rounded-md bg-gray-50', {
            'border-red-600  focus:ring-red-600': !!err,
          })}
        />
        {!!err && (
          <span className='-my-1 text-xs italic text-red-600'>{err}</span>
        )}
      </div>
    );
  }
);
export default Input;

interface TProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  err?: string;
  label: string;
}

// eslint-disable-next-line react/display-name
export const TextArea = forwardRef<HTMLTextAreaElement, TProps>(
  ({ err, label, ...props }, ref) => (
    <div className='flex w-full flex-col items-stretch gap-y-2'>
      <label htmlFor={props.name} className='capitalize'>
        {props.name}:
      </label>
      <textarea
        ref={ref}
        {...props}
        className={cx('w-full rounded-md bg-gray-50', {
          'border-red-600  focus:ring-red-600': !!err,
        })}
      />
      {!!err && (
        <span className='-my-1 text-xs italic text-red-600'>{err}</span>
      )}
    </div>
  )
);
