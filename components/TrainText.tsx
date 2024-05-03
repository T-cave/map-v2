// @ts-nocheck
import { getTrainImagePath } from "./Markers/TrainMarker";
import Image from 'next/image';

type TrainTextProps = {
    train: Train
    username: string
    avatar: string | null
}

const TrainText = ({ train, username }: TrainTextProps) => {

    let trainType = train.Vehicles[0];
    let trainAmount = 1;
    let trainImages = [];
    trainImages.push(<><Image src={getTrainImagePath(train.Vehicles[0])} width={"200"} height={"85"} alt={train.Vehicles[0]} /><br /></>); // first train image
    for (let i = 1; i < train.Vehicles.length; i++) {
        if (train.Vehicles[i] === trainType || train.Vehicles[i].split("/")[0] == trainType.split("/")[0]) { // Loco num can vary hence the before /
            trainAmount++;
            trainImages.push(<><Image src={getTrainImagePath(train.Vehicles[i])} width={"200"} height={"85"} alt={train.Vehicles[i]} /><br /></>);
        }
    }

    let trainAmountString = '';
    if (trainAmount > 1) 
        trainAmountString = `x${trainAmount}`;

    let wagonsAmount = train.Vehicles.length - trainAmount;
    let wagonsAmountString = ''
    if (wagonsAmount > 0 && train.Vehicles[0].includes('EN57') == false)
        wagonsAmountString = <>Wagons: x{wagonsAmount} <br /></>;

    let distanceToSignal = (train.TrainData.DistanceToSignalInFront/1000).toFixed(1) + "km"
    if (train.TrainData.DistanceToSignalInFront < 1000)
        distanceToSignal = Math.round(train.TrainData.DistanceToSignalInFront) + "m"

    return (
        <>
            {trainImages}
            Type: {train.Vehicles[0]} {trainAmountString}<br />
            Train: {train.TrainName} {train.TrainNoLocal}<br />
            {wagonsAmountString}
            User: {username}<br />
            Speed: {Math.round(train.TrainData.Velocity)} km/h<br />
            Departure: {train.StartStation}<br />
            Destination: {train.EndStation}<br />
            Distance to signal: {distanceToSignal}<br />
        </>
    )
}

export default TrainText;
