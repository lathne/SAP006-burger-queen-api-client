import minusImage from '../images/minus.svg'
import plusImage from '../images/plus.svg'
import trashImage from '../images/trash0.svg'

import '../styles/tabitems.scss'


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
      <li key={itemKey} className="tab-list">

        <div className="tab-items-buttons-container">
            <button onClick={removeItem} className="tab-items-button btn-quantity">
                <img src={minusImage}  alt="Remove"/>
            </button>
            <p className="item-quantity">{itemQtd}</p>
            <button onClick={addItem} className="tab-items-button btn-quantity">
              <img src={plusImage}  alt="Add"/>
            </button>
        </div>

        <div className="tab-items-container">
          <p className="tab-text">{itemName} {itemFlavor} {itemComplement} - {itemPrice},00</p>
        </div>

        <div className="tab-items-delete-container">
          <button onClick={deleteItem} className="tab-items-button">
            <img src={trashImage}  alt="Delete"/>
          </button>
        </div>

      </li>
    )
}
