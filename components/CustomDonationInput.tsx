import React from 'react';
import Link from 'next/link';

type Props = {
  name: string;
  value: number;
  min: number;
  max: number;
  currency: string;
  step: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const CustomDonationInput = ({
  name,
  value,
  min,
  max,
  step,
  onChange,
  className,
}: Props) => (
  <>
    <label className="small-font">
      CG Prospect doesn't collect any of your card information. The donation is
      securely handled by{' '}
      <a target="_blank" rel="noopener" href="https://stripe.com/">
        <span className="stripe underline">Stripe.</span>
      </a>{' '}
      {''}
      <Link href="/terms">
        <a className="underline highlight">See more in the terms page.</a>
      </Link>
      <input
        className={className}
        type="number"
        name={name}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      ></input>
      <input
        type="range"
        name={name}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      ></input>
    </label>
  </>
);

export default CustomDonationInput;
