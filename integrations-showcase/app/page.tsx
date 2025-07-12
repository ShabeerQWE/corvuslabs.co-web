import { IntegrationsShowcase } from "@/components/integrations-showcase"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="text-center py-8 md:py-16 bg-white">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Connect with 100+ Tools</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Seamlessly integrate with all your favorite tools and services to streamline your workflow.
        </p>
      </div>

      {/* Integrations Showcase */}
      <IntegrationsShowcase />
    </div>
  )
}
