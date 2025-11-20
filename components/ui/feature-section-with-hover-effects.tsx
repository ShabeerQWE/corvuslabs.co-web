import { cn } from "../../lib/utils";
import {
    IconBriefcase,
    IconCoffee,
    IconHeartHandshake,
    IconHome2,
    IconPlane,
    IconSchool,
    IconShoppingBag,
    IconTruckDelivery,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
    const features = [
        {
            title: "Travel & Tourism",
            description:
                "Empowering travel agencies and tour operators with seamless booking engines and immersive digital experiences.",
            icon: <IconPlane />,
        },
        {
            title: "Health & Beauty",
            description:
                "Elevating clinics and salons with appointment scheduling, patient management, and stunning brand presence.",
            icon: <IconHeartHandshake />,
        },
        {
            title: "Retail & E-Commerce",
            description:
                "Driving sales with robust online stores, inventory management, and frictionless checkout flows.",
            icon: <IconShoppingBag />,
        },
        {
            title: "Hospitality",
            description:
                "Optimizing operations for hotels and restaurants with reservation systems and guest management solutions.",
            icon: <IconCoffee />,
        },
        {
            title: "Education & Training",
            description:
                "Transforming learning with LMS platforms, student portals, and interactive educational tools.",
            icon: <IconSchool />,
        },
        {
            title: "Real Estate",
            description:
                "Connecting buyers and sellers through dynamic property listings, CRM integration, and virtual tours.",
            icon: <IconHome2 />,
        },
        {
            title: "Professional Services",
            description:
                "Streamlining workflows for consultants and agencies with client portals and automated reporting.",
            icon: <IconBriefcase />,
        },
        {
            title: "Logistics & Distribution",
            description:
                "Enhancing supply chain visibility with tracking systems, fleet management, and route optimization.",
            icon: <IconTruckDelivery />,
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature",
                (index === 0 || index === 4) && "lg:border-l",
                index < 4 && "lg:border-b"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
