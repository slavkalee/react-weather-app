import React, { ChangeEvent, FormEvent } from 'react';

interface Props {
  gettingWeather: () => Promise<void>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  city: string;
}

const Form: React.FC<Props> = ({ gettingWeather, handleChange, city }) => {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    gettingWeather();
  };

  return (
    <form onSubmit={submit}>
      <div className="input-container">
        <input
          value={city}
          type="text"
          placeholder="Enter city name"
          onChange={handleChange}
        />
      </div>
      <div className="btn-container">
        <button type="submit" className="btn-big">
          add city
        </button>
      </div>
    </form>
  );
};

export default Form;
