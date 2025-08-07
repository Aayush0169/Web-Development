import TicketNumber from "./TicketNumber";


export default function Ticket({ ticket }) {
  return (
    <div className="tkt">
        <h3>Your TIcket is:</h3>
      {ticket.map((num, idx) => (
        <TicketNumber number={num} key={idx} />
      ))}
    </div>
  );
}