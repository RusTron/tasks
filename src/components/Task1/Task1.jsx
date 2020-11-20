import React, { useState} from 'react';
import './Task1.scss';

const measuresValues = {
  'meter': 1, 'centimeter': 0.01, 'feet': 0.3048, 'inch': 0.0254,
  'millimeter': 0.001, 'kilometer': 1000, 
}

export const Task1 = () => {
  const [visibleMeasures, setVisibleMeasures] = useState(
    ['meter', 'centimeter', 'feet', 'inch']
  );
  const [additionalMeasures, setAdditioalMeasures] = useState(
    ['millimeter', 'kilometer', 'yard']
  );
  const [convertFrom, setConvertFrom] = useState(visibleMeasures[0]);
  const [convertTo, setConvertTo] = useState(visibleMeasures[0]);
  const [value, setValue] = useState('');
  const [newUnit, setNewUnit] = useState('');
  const [result, setResult] = useState({'unit': convertTo, 'value': 0});

  const setDataForConversion = (value, convertFrom, convertTo) => {
    const newData = {'distance': {'unit': convertFrom, 'value': value}, 'convert_to': convertTo}
    return newData
  }

  const convertData = (data) => {
    setResult({unit: data.convert_to, value: +(value * measuresValues[convertFrom] / measuresValues[convertTo]).toFixed(2)});
    return JSON.parse(result);
  }

  const addUnit = (currentUnit) => {
    setNewUnit(currentUnit);
    if(additionalMeasures.includes(currentUnit) && !visibleMeasures.includes(currentUnit)){
      setVisibleMeasures([...visibleMeasures, currentUnit]);
    }
  }

  return (
    <div className="block">
      <form 
        className="block__convert"
        onSubmit={(event) => {
          event.preventDefault();
          debugger;
          const newData = setDataForConversion(value, convertFrom, convertTo);
          convertData(newData);
        }}
      >
        <label htmlFor="enter" className="block__convert-label">
          Enter value
        </label>
        <input 
          id="enter"
          placeholder="Enter value"
          type="text"
          required
          className="block__convert-item"
          value={value}
          onChange={({target})=> setValue(target.value.replace(/\D/g, ''))}
        />
        <label htmlFor="select-measures2" className="block__convert-to"> Convert from: </label>
        <select 
          name="select-measure1"
          id="select-measures1"
          className="block__convert-item"
          value={convertFrom}
          onChange={({target})=> setConvertFrom(target.value)}
        >
          {visibleMeasures.map(item => 
            <option value={item} key={item} className="selectField-option">{item}</option>
          )}
        </select>
        <label htmlFor="select-measures2" className="block__convert-to"> Convert to: </label>
        <select 
          name="select-measure1"
          id="select-measures2"
          className="block__convert-item"
          value={convertTo}
          onChange={({target})=> setConvertTo(target.value)}
        >
          {visibleMeasures.map(item => 
            <option value={item} key={item} className="selectField-option">{item}</option>
          )}
        </select>
        <button
          type="submit"
          className="block__convert-button"
        >
          Convert</button>
      </form>
      <label 
        htmlFor="addUnit" className="block__convert-to"> Add unit: </label>
      <select 
        name="addUnit"
        id="addUnit"
        className="block__addUnit"
        value={newUnit || "Select unit..."}
        onChange={({target})=> addUnit(target.value)}
      >
        <option value="Select unit..." className="selectField-option">Select unit...</option>
        {additionalMeasures.map(item => 
          <option value={item} key={item} className="selectField-option">{item}</option>
        )}
      </select>
      <span className="block__convert-item">
        {`Your result: ${result.value} ${result.unit}${result.value >= 2 ? 's' : ''}`}
      </span>
    </div>
  );
}
