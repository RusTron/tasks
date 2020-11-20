import React, { useState} from 'react';
import './Task2.scss';

const data = {"data": 
 [{"name": "John", "email": "john2@mail.com"},
  {"name": "John", "email": "john1@mail.com"},
  {"name": "Jane", "email": "jane@mail.com"}],
  "condition": {"include": [{"name": "John"}], "sort_by": ["rating"]}
}
const rules = {"sort_by": {"type": "select"}, "include": {"type": "text"}};
const newRules = {"exclude":{"type": "text"}};
console.log(newRules);

export const Task2 = () => {
  const [value, setValue] = useState('');
  const [rules, setRules] = useState({"sort_by": {"type": "select"}, "includes": {"type": "text"}});
  const [selectedRule, setSelectedRule] = useState('');

  const addNewRule = (rule) => {
    setSelectedRule(rule);
    if (data.condition.hasOwnProperty(rule)){
      const newRule = newRules[rule];
      setRules({...rules, newRule});
    }
  }

  return (
    <div className="block">
      <label htmlFor="select-newRule" className="block__select-label"> Add new rules: </label>
      <select
        name="select-newRule"
        id="select-measures1"
        className="block-addRules"
        value={selectedRule || "Select unit..."}
        onChange={({target})=> addNewRule(target.value)}
      >
        <option value="Select field..." className="selectField-option">Select unit...</option>
        {Object.keys(newRules).map(item => 
          <option value={item} key={item} className="selectField-option">{item}</option>
        )}
      </select>
      <form
        className="block__select"
        // onSubmit={(event) => {
        //   event.preventDefault();
        //   debugger;
        //   const newData = setDataForConversion(value, selectFrom, selectTo);
        //   selectData(newData);
        // }}
      >
        {Object.keys(rules).map(item=>
          {return rules[item].type === 'select' ? (
            <>
              <label htmlFor={`task2-${item}`} className="block__select-label">
                {`${item[0].toUpperCase()}${item.slice(1).replace(/[\W,_]/g, ' ')}:`}
              </label>
              <select
                name={`select-${item}`}
                id={`select-${item}`}
                className="block__select-item"
              >
                <option value="Select field..." className="selectField-option">Select unit...</option>
                {data.data.map((item, i) => {
                  if(i) return; 
                  const key = Object.keys(item);

                  return key.map(prop=>
                    <option value={prop} key={prop} className="selectField-option">{prop}</option>
                  )}
                )}
              </select>
            </>
          ) : (
            <>
              <label htmlFor="select-enter" className="block__select-include"> Include: </label>
              <input 
                id="select-enter"
                placeholder="Enter value"
                type="text"
                className="block__select-item"
                value={value}
                // onChange={({target})=> setValue(target.value.trimLeft())}
              />
            </>
          )}
        )}
        <button
          type="submit"
          className="block__select-button"
        >
          Convert
        </button>
      </form>
      <button
          type="submit"
          className="block__select-button"
        >
          Convert
        </button>
      <label 
        htmlFor="addUnit" className="block__select-to"> Add unit: </label>
      <select 
        name="addUnit"
        id="addUnit"
        className="block__addUnit"
        // value={newUnit || "Select unit..."}
        // onChange={({target})=> addUnit(target.value)}
      >
        <option value="Select unit..." className="selectField-option">Select unit...</option>
        {/* {additionalMeasures.map(item => 
          <option value={item} key={item} className="selectField-option">{item}</option>
        )} */}
      </select>
    </div>
  );
}
