"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import ProfileHeader from "@/components/ProfileHeader";
import NoFitnessPlan from "@/components/NoFitnessPlan";

const ProfilePage = () => {
  const { user } = useUser();
  const userId = user?.id as string;

  const allPlans = useQuery(api.plans.getUserPlans, { userId });
  
    return (
    <section className="relative z-10 pt-12 pb-32 flex-grow container mx-auto px-4">
      <ProfileHeader user={user} />

      {allPlans && allPlans.length > 0 ? (
        <div className="space-y-8">
          {/* Your plan cards or summaries go here */}
        </div>
      ) : (
        <NoFitnessPlan />
      )}

      {/* Thank You Message Box */}
      <div className="mt-20 flex justify-center">
        <div className="bg-card/80 border border-border rounded-xl px-10 py-6 text-center shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Thank you for using CodeFlex AI Fitness.
          </h2>
          <p className="text-lg md:text-xl font-extrabold text-foreground">
            Made by Ankur Dubey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
