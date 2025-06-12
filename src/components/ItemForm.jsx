import { useState } from "react";
import supabase from "../supabase";

// Type Options
const ASSETS = [
  { name: "Cash" },
  { name: "Realty" },
  { name: "Saving" },
  { name: "Vehicle" },
  { name: "Other" },
];

const LIABILITIES = [
  { name: "Bill" },
  { name: "Credit" },
  { name: "Loan" },
  { name: "Tax" },
  { name: "Other" },
];

function ItemForm({ setItems, setShowForm }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));

    if (!name || isNaN(numericValue) || !type) {
      setShowErrors(true);
      return;
    }

    setIsUploading(true);

    const { data, error } = await supabase
      .from("items")
      .insert([{ name, type, value: numericValue }])
      .select();

    setIsUploading(false);

    if (error) {
      alert("Error adding item: " + error.message);
      return;
    }

    if (data && data.length > 0) {
      setItems((items) => [data[0], ...items]);
      setShowForm(false);
      setName("");
      setType("");
      setValue("");
      setShowErrors(false);
    } else {
      alert("Item not returned from database.");
    }
  }

  return (
    <div className="flex justify-center w-full bg-[#252728] p-4 rounded-2xl mb-4 mt-4 ">
      <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <div class="flex flex-col gap-4">
          <input
            className="w-full p-2 rounded-2xl"
            type="text"
            placeholder="Name"
            value={name}
            maxLength="30"
            onChange={(e) => setName(e.target.value)}
            disabled={isUploading}
            style={{
              ...(showErrors && {
                border: "4px solid #FA4A4A",
              }),
              appearance: "textfield",
              MozAppearance: "textfield",
              WebkitAppearance: "none",
            }}
          />
          <div className="text-right text-sm text-red">{30 - name.length}</div>
          <input
            className="w-full p-2 rounded-2xl"
            type="texts"
            maxLength="30"
            placeholder="Value"
            value={value}
            onChange={(e) => {
              const raw = e.target.value.replace(/[^\d]/g, "");
              setValue(raw ? "$" + Number(raw).toLocaleString() : "");
            }}
            disabled={isUploading}
            style={{
              ...(showErrors &&
                isNaN(parseFloat(value.replace(/[^0-9.]/g, ""))) && {
                  border: "4px solid #FA4A4A",
                }),
              appearance: "textfield",
              MozAppearance: "textfield",
              WebkitAppearance: "none",
            }}
          />
          <select
            className="bg-[#252728] w-full p-2 rounded-2xl"
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{
              ...(showErrors &&
                !type && {
                  border: "4px solid #FA4A4A",
                }),
            }}
          >
            <option value="" disabled>
              Type
            </option>
            <optgroup label="Assets">
              {ASSETS.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Liabilities">
              {LIABILITIES.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </optgroup>
          </select>
          <button type="submit" className="btn-primary" disabled={isUploading}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ItemForm;
