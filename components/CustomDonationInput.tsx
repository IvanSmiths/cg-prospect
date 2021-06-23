import React from 'react';

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
      Donate securely with <span className="stripe">Stripe</span>
      <img
        src="/icon-stripe.svg"
        className="stripe-icon"
        height="42"
        width="42"
        loading="lazy"
        alt="icon of stripe"
      />
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
