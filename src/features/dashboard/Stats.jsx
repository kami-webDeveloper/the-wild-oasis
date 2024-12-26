/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabins }) {
  const numBookings = bookings.length;

  const totalSale = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occRate =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabins);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalSale)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occRate * 100) + "%"}
      />
    </>
  );
}

export default Stats;
