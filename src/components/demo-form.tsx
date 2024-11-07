import {
  MultiStepForm,
  MultiStepFormHeader,
  MultiStepFormStep,
  createStepSchema,
  useMultiStepFormContext,
} from "@/components/form/multi-step-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import bppflag from "@/assets/images/logos/bppflag.png";

const FormSchema = createStepSchema({
  membershipDetail: z
    .object({
      membershipType: z.string().min(1, "Select a membership type"),
      state: z.string().min(1, "Select a state"),
      language: z.string().min(1, "Select a language"),
      isReferral: z.boolean(),
      referralCode: z.string().optional(),
    })
    .refine(
      (data) => {
        if (data.isReferral && !data.referralCode) {
          return false;
        }
        return true;
      },
      {
        message: "Referral code is required",
        path: ["referralCode"],
      }
    ),
  membershipInfo: z.object({
    firstName: z.string().min(3),
    middleName: z.string().optional(),
    lastName: z.string().min(3),
    age: z.string().min(2),
    address1: z.string().min(3),
    address2: z.string().min(3).optional(),
    city: z.string().min(3),
    state: z.string().min(3),
    zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
    email: z.string().email(),
    phone: z.string().min(10, "Phone number must be 10 digits"),
    voterId: z.string().min(10, "Enter a valid voter ID"),
    aadharNumber: z
      .string()
      .min(12, "Aadhar must be 12 digits")
      .refine((val) => /^\d{12}$/.test(val), {
        message: "Aadhar number must be exactly 12 digits",
      }),
  }),
  account: z
    .object({
      username: z.string().min(3),
      password: z.string().min(6),
      confirmPassword: z.string().min(6),
      pin: z.string().min(4).max(6),
      confirmPin: z.string().min(4).max(6),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    })
    .refine((data) => data.pin === data.confirmPin, {
      message: "Pins do not match",
      path: ["confirmPin"],
    }),
});

type FormValues = z.infer<typeof FormSchema>;

export function DemoForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      account: {
        username: "",
        password: "",
        confirmPassword: "",
        pin: "",
        confirmPin: "",
      },
      membershipDetail: {
        membershipType: "",
        state: "",
        language: "",
        isReferral: false,
        referralCode: "",
      },
      membershipInfo: {
        firstName: "",
        middleName: "",
        lastName: "",
        age: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
        email: "",
        phone: "",
        voterId: "",
        aadharNumber: "",
      },
    },
    mode: "onBlur",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully! Check console for data.");
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto my-8 space-y-10 p-6 md:p-8 rounded-xl">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 border rounded-xl shadow-md">
        {/* Left Section: Welcome Message */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={bppflag}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <h1 className="font-extrabold text-3xl md:text-4xl text-gray-900">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Bharatiya Popular Party
            </span>
          </h1>
          <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
            Our goal at BPP is to foster mass connectivity, empowering
            individuals from all levels of society. We aim to create a
            transparent and accessible platform where every citizen can
            contribute to shaping policies and decisions. BPP envisions a
            society where all voices are heard, and decision-making is a
            collective, inclusive process.
          </p>
        </div>

        {/* Right Section: Form */}
        <div className="w-full md:w-1/2 bg-white rounded-xl p-6 shadow-lg">
          <MultiStepForm
            className="px-2"
            schema={FormSchema}
            form={form}
            onSubmit={onSubmit}
          >
            <MultiStepFormHeader className="flex w-full flex-col justify-center mb-4 space-y-6">
              <h2 className="text-2xl font-bold  text-center">
                Create your account
              </h2>
              <hr />
            </MultiStepFormHeader>

            <MultiStepFormStep name="membershipDetail">
              <MembershipDetailStep />
            </MultiStepFormStep>

            <MultiStepFormStep name="membershipInfo">
              <MembershipInfoStep />
            </MultiStepFormStep>

            <MultiStepFormStep name="account">
              <AccountStep />
            </MultiStepFormStep>
          </MultiStepForm>
        </div>
      </div>
    </div>
  );
}

function MembershipDetailStep() {
  const { form, nextStep, isStepValid } = useMultiStepFormContext();
  const watchIsReferral = form.watch("membershipDetail.isReferral");

  return (
    <div className="flex flex-col gap-4">
      {/* Membership Type (Radio Group) */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Membership Type
        </label>
        <RadioGroup
          className="flex gap-x-4"
          value={form.watch("membershipDetail.membershipType")}
          onValueChange={(value) =>
            form.setValue("membershipDetail.membershipType", value)
          }
        >
          <RadioGroupItem value="Primary" label="Primary" />
          <RadioGroupItem value="Active" label="Active" />
        </RadioGroup>
        {form.formState.errors.membershipDetail?.membershipType && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipDetail.membershipType.message}
          </p>
        )}
      </div>

      {/* State (Select Dropdown) */}
      <div>
        <label className="block text-sm font-medium mb-1">State</label>
        <Select
          onValueChange={(value) =>
            form.setValue("membershipDetail.state", value)
          }
          defaultValue={form.watch("membershipDetail.state")}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a state" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Maharashtra">Maharashtra</SelectItem>
            <SelectItem value="Karnataka">Karnataka</SelectItem>
          </SelectContent>
        </Select>
        {form.formState.errors.membershipDetail?.state && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipDetail.state.message}
          </p>
        )}
      </div>

      {/* Language (Select Dropdown) */}
      <div>
        <label className="block text-sm font-medium mb-1">Language</label>
        <Select
          onValueChange={(value) =>
            form.setValue("membershipDetail.language", value)
          }
          defaultValue={form.watch("membershipDetail.language")}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Hindi">Hindi</SelectItem>
            <SelectItem value="English">English</SelectItem>
          </SelectContent>
        </Select>
        {form.formState.errors.membershipDetail?.language && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipDetail.language.message}
          </p>
        )}
      </div>

      {/* Is Referral (Checkbox) */}
      <div>
        <label className="block text-sm font-medium mb-1">Referral</label>
        <input
          type="checkbox"
          {...form.register("membershipDetail.isReferral")}
        />
      </div>

      {/* Referral Code (Conditional) */}
      {watchIsReferral && (
        <div>
          <label className="block text-sm font-medium mb-1">
            Referral Code
          </label>
          <Input {...form.register("membershipDetail.referralCode")} />
          {form.formState.errors.membershipDetail?.referralCode && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.membershipDetail.referralCode.message}
            </p>
          )}
        </div>
      )}

      <div className="flex justify-end">
        <Button onClick={nextStep} disabled={!isStepValid()}>
          Next
        </Button>
      </div>
    </div>
  );
}

function MembershipInfoStep() {
  const { form, nextStep, prevStep, isStepValid } = useMultiStepFormContext();

  return (
    <div className="flex flex-col gap-4">
      {/* First Name */}
      <div>
        <label className="block text-sm font-medium mb-1">First Name</label>
        <Input {...form.register("membershipInfo.firstName")} />
        {form.formState.errors.membershipInfo?.firstName && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipInfo.firstName.message}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Last Name</label>
        <Input {...form.register("membershipInfo.lastName")} />
        {form.formState.errors.membershipInfo?.lastName && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipInfo.lastName.message}
          </p>
        )}
      </div>

      {/* Age */}
      <div>
        <label className="block text-sm font-medium mb-1">Age</label>
        <Input {...form.register("membershipInfo.age")} />
        {form.formState.errors.membershipInfo?.age && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipInfo.age.message}
          </p>
        )}
      </div>

      {/* Address 1 */}
      <div>
        <label className="block text-sm font-medium mb-1">Address Line 1</label>
        <Input {...form.register("membershipInfo.address1")} />
        {form.formState.errors.membershipInfo?.address1 && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipInfo.address1.message}
          </p>
        )}
      </div>

      {/* Address 2 */}
      <div>
        <label className="block text-sm font-medium mb-1">Address Line 2</label>
        <Input {...form.register("membershipInfo.address2")} />
        {form.formState.errors.membershipInfo?.address2 && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipInfo.address2.message}
          </p>
        )}
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-medium mb-1">City</label>
        <Input {...form.register("membershipInfo.city")} />
        {form.formState.errors.membershipInfo?.city && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipInfo.city.message}
          </p>
        )}
      </div>

      {/* State */}
      <div>
        <label className="block text-sm font-medium mb-1">State</label>
        <Input {...form.register("membershipInfo.state")} />
        {form.formState.errors.membershipInfo?.state && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipInfo.state.message}
          </p>
        )}
      </div>

      {/* Zip Code */}
      <div>
        <label className="block text-sm font-medium mb-1">Zip Code</label>
        <Input {...form.register("membershipInfo.zipCode")} />
        {form.formState.errors.membershipInfo?.zipCode && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipInfo.zipCode.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <Input {...form.register("membershipInfo.email")} />
        {form.formState.errors.membershipInfo?.email && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipInfo.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <Input {...form.register("membershipInfo.phone")} />
        {form.formState.errors.membershipInfo?.phone && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipInfo.phone.message}
          </p>
        )}
      </div>

      {/* Voter ID */}
      <div>
        <label className="block text-sm font-medium mb-1">Voter ID</label>
        <Input {...form.register("membershipInfo.voterId")} />
        {form.formState.errors.membershipInfo?.voterId && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipInfo.voterId.message}
          </p>
        )}
      </div>

      {/* Aadhar Number */}
      <div>
        <label className="block text-sm font-medium mb-1">Aadhar Number</label>
        <Input {...form.register("membershipInfo.aadharNumber")} />
        {form.formState.errors.membershipInfo?.aadharNumber && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.membershipInfo.aadharNumber.message}
          </p>
        )}
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={prevStep}>
          Previous
        </Button>
        <Button onClick={nextStep} disabled={!isStepValid()}>
          Next
        </Button>
      </div>
    </div>
  );
}

function AccountStep() {
  const { form, prevStep, handleSubmit, isStepValid } =
    useMultiStepFormContext();

  return (
    <div className="flex flex-col gap-4">
      {/* Username */}
      <div>
        <Label htmlFor="username">Username</Label>
        <Input id="username" {...form.register("account.username")} />
        {form.formState.errors.account?.username && (
          <p className="text-red-500 text-sm mt-1">
            {form.formState.errors.account.username.message}
          </p>
        )}
      </div>

      {/* Password and Confirm Password */}
      <div className="grid grid-cols-2 gap-4">
        {/* Password */}
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...form.register("account.password")}
          />
          {form.formState.errors.account?.password && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.account.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...form.register("account.confirmPassword")}
          />
          {form.formState.errors.account?.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.account.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      {/* Pin and Confirm Pin */}
      <div className="grid grid-cols-2 gap-4">
        {/* Pin */}
        <div>
          <Label htmlFor="pin">Pin</Label>
          <Input id="pin" type="password" {...form.register("account.pin")} />
          {form.formState.errors.account?.pin && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.account.pin.message}
            </p>
          )}
        </div>

        {/* Confirm Pin */}
        <div>
          <Label htmlFor="confirmPin">Confirm Pin</Label>
          <Input
            id="confirmPin"
            type="password"
            {...form.register("account.confirmPin")}
          />
          {form.formState.errors.account?.confirmPin && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.account.confirmPin.message}
            </p>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handleSubmit} disabled={!isStepValid()}>
          Submit
        </Button>
      </div>
    </div>
  );
}

// function AccountStep() {
//   const { form, nextStep, isStepValid } = useMultiStepFormContext();

//   return (
//     <div className="flex flex-col gap-4">
//       <div>
//         <label className="block text-sm font-medium mb-1">Username</label>
//         <Input {...form.register("account.username")} />
//         {form.formState.errors.account?.username && (
//           <p className="text-red-500 text-sm mt-1">
//             {form.formState.errors.account.username.message}
//           </p>
//         )}
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Email</label>
//         <Input type="email" {...form.register("account.email")} />
//         {form.formState.errors.account?.email && (
//           <p className="text-red-500 text-sm mt-1">
//             {form.formState.errors.account.email.message}
//           </p>
//         )}
//       </div>

//       <div className="flex justify-end">
//         <Button onClick={nextStep} disabled={!isStepValid()}>
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// }

// function ProfileStep() {
//   const { form, nextStep, prevStep } = useMultiStepFormContext();

//   return (
//     <div className="flex flex-col gap-4">
//       <div>
//         <label className="block text-sm font-medium mb-1">Password</label>
//         <Input type="password" {...form.register("profile.password")} />
//         {form.formState.errors.profile?.password && (
//           <p className="text-red-500 text-sm mt-1">
//             {form.formState.errors.profile.password.message}
//           </p>
//         )}
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Age</label>
//         <Input type="number" {...form.register("profile.age")} />
//         {form.formState.errors.profile?.age && (
//           <p className="text-red-500 text-sm mt-1">
//             {form.formState.errors.profile.age.message}
//           </p>
//         )}
//       </div>

//       <div className="flex justify-end space-x-2">
//         <Button variant="outline" onClick={prevStep}>
//           Previous
//         </Button>
//         <Button onClick={nextStep}>Next</Button>
//       </div>
//     </div>
//   );
// }

// function ReviewStep() {
//   const { form, prevStep } = useMultiStepFormContext();
//   const values = form.getValues();

//   return (
//     <div className="flex flex-col space-y-4">
//       <div className="flex flex-col space-y-4">
//         <div>Great! Please review your information.</div>

//         <div className="flex flex-col space-y-2 text-sm">
//           <div>
//             <span className="font-medium">Username</span>:{" "}
//             {values.account.username}
//           </div>
//           <div>
//             <span className="font-medium">Email</span>: {values.account.email}
//           </div>
//           <div>
//             <span className="font-medium">Age</span>: {values.profile.age}
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-end space-x-2">
//         <Button variant="outline" onClick={prevStep}>
//           Back
//         </Button>
//         <Button type="submit">Create Account</Button>
//       </div>
//     </div>
//   );
// }
