export const NewChannelData = ({ capacity, durationType, durationValue }) => {
  return (
    <div className="new-channel-data">
      <div className="row">
        <h2>Total Capacity</h2>
        <p>{capacity} sats</p>
      </div>
      <div className="row">
        <h2>Initial BTC balance</h2>
        <p>{capacity} sats</p>
      </div>
      <div className="row bold">
        <h2>Channel Expiry</h2>
        <p>
          {durationValue} {durationType}
        </p>
      </div>
    </div>
  );
};
