function NewRecord({ setShowForm, showForm }) {
  return (
    <button
      className="btn-primary text-lg text-center"
      onClick={() => setShowForm((show) => !show)}
    >
      {!showForm ? "Add" : "X"}
    </button>
  );
}
export default NewRecord;
