import { PanelNavigation } from "@/components/section";
import { Input } from "@/components/ui/input"; // Assuming this is the Input component from your UI library
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languages } from '@/data/language';
import { state } from '@/data/states';
import { useState } from "react";
import { useForm } from "react-hook-form";

const PersonalInfo = ({ defaultState, updateInfo }) => {
  const { register, handleSubmit } = useForm();
  const [hasReferral, setHasReferral] = useState(false); // State to track checkbox

  const memInfo = defaultState.memInfo ?? {};

  return (
    <form onSubmit={handleSubmit(updateInfo)}>
      <div className="grid">
        {/* State Select */}
        <div className="mb-4">
          <Label htmlFor="state">State</Label>
          <Select 
          // onValueChange={(value) => setValue("state", value)}
          >
            <SelectTrigger id="state">
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(state).map(([code, name]) => (
                <SelectItem key={code} value={code}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4">
          <Label htmlFor="language">Language</Label>
          <Select 
          // onValueChange={(value) => setValue("language", value)}
          >
            <SelectTrigger id="language">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(languages).map(([code, name]) => (
                <SelectItem key={code} value={code}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Referral Checkbox */}
        <div className="mb-4">
          <Label htmlFor="referralCheckbox">
            <input
              type="checkbox"
              id="referralCheckbox"
              className="mr-2"
              onChange={() => setHasReferral(!hasReferral)} // Toggle referral input visibility
            />
            Do you have any referral?
          </Label>
        </div>

        {/* Conditional Referral Input */}
        {hasReferral && (
          <div className="mb-4">
            <Label htmlFor="referralCode">Referral Code</Label>
            <Input
              {...register("referralCode")}
              id="referralCode"
              type="text"
              placeholder="Enter referral code"
              className="my-1"
            />
          </div>
        )}
      </div>

      <PanelNavigation panelCompletionStatus={0} />
    </form>
  );
};

export default PersonalInfo;
