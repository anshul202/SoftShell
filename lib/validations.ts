import * as z from "zod";

export const licenseOptions = ['Single User', 'Multi User', 'Enterprise', 'Educational'] as const; // For Zod enum

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  licenseType: z.enum(licenseOptions, {
    errorMap: () => ({ message: "Please select a license type." }),
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must be at most 500 characters." }),
});


export type ContactFormValues = z.infer<typeof contactFormSchema>;

