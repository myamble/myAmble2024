"use client";

import { useSession } from "next-auth/react";

export default function DailyTripPlanner() {
  const { data: session } = useSession();

  return (
    <div>
      <h3>
        <b>DailyTripPlanner</b>
      </h3>
    </div>
  );
}
