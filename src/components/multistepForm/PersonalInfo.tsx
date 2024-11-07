import { PanelNavigation } from "@/components/section";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
// import { DatePicker } from "@/components/ui/date-picker"; // Assuming this is the shadcn date picker
import React from "react";

const PersonalInfo = ({ defaultState, updateInfo }) => {
  const { register, handleSubmit, setValue } = useForm();
  const personal = defaultState.personal ?? {};

  return (
    <form onSubmit={handleSubmit(updateInfo)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Name, Middle Name, Last Name in one row */}
        <div className="mb-4">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            {...register("firstName", { required: true, value: personal.firstName })}
            className="my-1"
            type="text"
            id="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="middleName">Middle Name</Label>
          <Input
            {...register("middleName", { required: false, value: personal.middleName })}
            className="my-1"
            type="text"
            id="middleName"
            placeholder="Middle Name"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            {...register("lastName", { required: true, value: personal.lastName })}
            className="my-1"
            type="text"
            id="lastName"
            placeholder="Last Name"
            required
          />
        </div>
      </div>

      {/* Age and Date of Birth in the second row */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="mb-4">
          <Label htmlFor="age">Age</Label>
          <Input
            {...register("age", { required: true, value: personal.age })}
            className="my-1"
            type="number"
            id="age"
            placeholder="Enter age"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            {...register("dob", { required: true, value: personal.dob })}
            className="my-1"
            type="date"
            id="dob"
            placeholder="Enter Date of Birth"
            required
          />
          {/* <DatePicker
            onSelect={(date) => setValue("dob", date)} // Assuming DatePicker has onSelect handler
            placeholder="Select Date"
          /> */}
        </div>
      </div>

      {/* Voter ID and Aadhaar Number in the third row */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="mb-4">
          <Label htmlFor="voterId">Voter ID</Label>
          <Input
            {...register("voterId", { required: true, value: personal.voterId })}
            className="my-1"
            type="text"
            id="voterId"
            placeholder="Enter Voter ID"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="aadharNumber">Aadhaar Number</Label>
          <Input
            {...register("aadharNumber", { required: true, value: personal.aadharNumber })}
            className="my-1"
            type="text"
            id="aadharNumber"
            placeholder="Enter Aadhaar Number"
            required
          />
        </div>
      </div>

      <PanelNavigation panelCompletionStatus={0} />
    </form>
  );
};

export default PersonalInfo;
