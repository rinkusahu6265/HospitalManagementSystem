import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto lg:px-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center shadow-lg shadow-green-500/20">
            <i className="pi pi-heart text-white text-xl"></i>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">HealthCenter</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">Features</a>
          <Link to="/health-management" className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">Dashboard</Link>
          <Link 
            to="/health-management" 
            className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Access Portal
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-24 pb-32 px-6 lg:px-8 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full -z-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-medium mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            System Version 2.0 is Live
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
            Next-generation <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">Health Management</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            A comprehensive, secure, and intuitive platform designed to streamline health center operations, patient records, and medical inventory.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/health-management" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Enter Dashboard
              <i className="pi pi-arrow-right text-sm"></i>
            </Link>
            <a 
              href="#features" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-700 font-semibold text-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              Explore Features
            </a>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-slate-200">
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-slate-900 mb-2">10k+</div>
              <div className="text-sm font-medium text-slate-500">Active Members</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-slate-900 mb-2">99.9%</div>
              <div className="text-sm font-medium text-slate-500">System Uptime</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-sm font-medium text-slate-500">Medical Support</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-slate-900 mb-2">Zero</div>
              <div className="text-sm font-medium text-slate-500">Data Breaches</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to run a modern health center</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Our platform combines all essential tools into one seamless experience, reducing administrative overhead and improving patient care.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Electronic Health Records', icon: 'pi-folder-open', bg: 'bg-blue-50 text-blue-600', desc: 'Securely manage and access patient histories, prescriptions, and test results instantly.' },
            { title: 'Smart Appointments', icon: 'pi-calendar-plus', bg: 'bg-pink-50 text-pink-600', desc: 'Intelligent scheduling system that optimizes doctor availability and reduces wait times.' },
            { title: 'Inventory Management', icon: 'pi-box', bg: 'bg-amber-50 text-amber-600', desc: 'Automated tracking of medical supplies with low-stock alerts and expiration monitoring.' },
            { title: 'Member Portal', icon: 'pi-users', bg: 'bg-purple-50 text-purple-600', desc: 'Self-service portal for employees and students to manage dependents and view records.' },
            { title: 'Advanced Analytics', icon: 'pi-chart-line', bg: 'bg-teal-50 text-teal-600', desc: 'Real-time dashboards and reports to make data-driven decisions for your facility.' },
            { title: 'Role-based Access', icon: 'pi-shield', bg: 'bg-slate-100 text-slate-700', desc: 'Granular permission controls ensuring staff only see the information they need.' },
          ].map((feature, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300">
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`pi ${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <i className="pi pi-heart text-green-500"></i>
            <span className="font-bold text-slate-800">HealthCenter HMS</span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Health Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
