import DeleteButton from "./DeleteButton";
function Item({ item }) {
  return (
    <>
      <div className="grid items-center grid-cols-4 bg-[#252728] rounded-md p-4 center">
        <span className="justify-self-center">{item.type}</span>

        <span className="justify-self-center">{item.name}</span>
        <span className="justify-self-center">
          $ {item.value.toLocaleString()}
        </span>
        <span className="justify-self-center">
          <DeleteButton />
        </span>
      </div>
    </>
  );
}
export default Item;
