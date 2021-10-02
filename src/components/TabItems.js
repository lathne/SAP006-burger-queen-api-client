export function TabItems({
  removeItem,
  addItem,
  deleteItem,
  itemKey,
  itemQtd,
  itemName,
  itemFlavor,
  itemComplement,
  itemPrice
}) {
    return (
      <li key={itemKey}>
        <div>
          <button onClick={removeItem}></button>
          <button onClick={addItem}></button>
          <p>{itemQtd}-{itemName} {itemFlavor} {itemComplement} - {itemPrice},00</p>
        </div>
        <div>
          <button onClick={deleteItem}></button>
        </div>
      </li>
    )
}
