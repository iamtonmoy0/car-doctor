
const BookingRow = ({booking,handleDelete}) => {
	const { _id, date, service, price, img, status } = booking;
	
	
	return (
		<tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle bg-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary bg-green-500">Confirmed</span> :
                        <button  className="btn btn-ghost btn-xs bg-red-400">Please Confirm</button>}
            </th>
        </tr>
	);
}

export default BookingRow;
