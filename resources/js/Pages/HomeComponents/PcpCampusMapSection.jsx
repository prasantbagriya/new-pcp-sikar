import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Clock, 
  Building2, 
  ExternalLink, 
  Sparkles, 
  Compass, 
  Maximize2, 
  CheckCircle2, 
  Layers, 
  ChevronRight,
  ShieldCheck,
  GraduationCap,
  Calendar,
  Eye,
  Map,
  Satellite
} from 'lucide-react';

// PCP Centers Master Data with Real Verified Addresses & Exact Locations
const PCP_CENTERS = [
  {
    id: 'palwas',
    name: 'PCP Sikar — Palwas Road Headquarters',
    shortName: 'Palwas Road HQ',
    badge: 'Main Residential Mega Campus',
    type: 'sikar',
    city: 'Sikar',
    tagline: '100+ Acre Flagship Residential Coaching & Educational Hub',
    address: 'Palwas Road, Sikar, Rajasthan — 332001',
    landmark: 'Palwas Road Educational Corridor',
    helpline: '+91 9610-89-2222',
    alternatePhone: '+91 9610-61-2222',
    email: 'pcpsikar@gmail.com',
    hours: 'Mon – Sat: 8:00 AM – 8:00 PM | Sun: 9:00 AM – 5:00 PM',
    lat: 27.608380,
    lng: 75.123510,
    zoom: 15,
    embedQuery: 'PCP Sikar Palwas Road',
    image: '/uploads/pcp_campus_building.png',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=PCP+Palwas+Road+Sikar',
    facilities: [
      '100+ Acre Residential Hub',
      'Separate AC Hostels (Boys & Girls)',
      '24x7 Central AC Library & Reading Rooms',
      'Olympic-standard Sports Complex',
      'Resident Faculty & Daily Doubt Desks'
    ]
  },
  {
    id: 'piprali',
    name: 'PCP Sikar — Piprali Road Campus',
    shortName: 'Piprali Road Branch',
    badge: 'City Classroom Hub',
    type: 'sikar',
    city: 'Sikar',
    tagline: 'Day Boarding & Class 6–10 Pre-Foundation Coaching Hub',
    address: 'Elenza Heights, New Janta Colony, Piprali Road, Sikar, Rajasthan — 332001',
    landmark: 'Opposite Piprali Road Coaching Hub',
    helpline: '+91 9610-53-2222',
    alternatePhone: '+91 9610-83-2222',
    email: 'pcppalwasroad@gmail.com',
    hours: 'Mon – Sat: 8:00 AM – 8:00 PM | Sun: 9:00 AM – 5:00 PM',
    lat: 27.625840,
    lng: 75.161120,
    zoom: 16,
    embedQuery: 'PCP Piprali Road Sikar',
    image: '/uploads/pcp_banner.png',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=PCP+Piprali+Road+Sikar',
    facilities: [
      'Digital Interactive Classrooms',
      'Pre-Foundation (Class 6-10) Wing',
      'Daily Practice Problem (DPP) Counters',
      'All-India Test Assessment Lab',
      'Parent Counseling & Admission Desk'
    ]
  },
  {
    id: 'jaipur',
    name: 'PCP Jaipur — Gopalpura Bypass Center',
    shortName: 'Jaipur Capital Center',
    badge: 'Capital City Center',
    type: 'jaipur',
    city: 'Jaipur',
    tagline: 'Premier Admission, Counseling & Classroom Center in Jaipur',
    address: 'Balaji Tower, Near Ridhi Sidhi Circle, Gopalpura Bypass, Jaipur, Rajasthan — 302018',
    landmark: 'Gopalpura Bypass Educational Hub',
    helpline: '+91 9610-89-2222',
    alternatePhone: '+91 9610-61-2222',
    email: 'pcpjaipur@gmail.com',
    hours: 'Mon – Sat: 8:30 AM – 7:30 PM | Sun: 9:00 AM – 4:00 PM',
    lat: 26.852950,
    lng: 75.776020,
    zoom: 16,
    embedQuery: 'PCP Jaipur Gopalpura Bypass',
    image: '/uploads/pcp/PCPjaipur.jpg',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=PCP+Gopalpura+Bypass+Jaipur',
    facilities: [
      'Senior NEET & JEE Career Counselors',
      'Classroom Batches for Droppers & Foundation',
      'Direct Spot Admissions & Scholarship Desk',
      'P-SAT Registration & Verification Hub'
    ]
  },
  {
    id: 'academy',
    name: 'Prince Academy & International Campus',
    shortName: 'Prince Academy Hub',
    badge: 'Integrated Schooling',
    type: 'sikar',
    city: 'Sikar',
    tagline: 'CBSE & RBSE Day-Boarding + Residential Integrated Schooling',
    address: 'Palwas Road, Sikar, Rajasthan — 332001',
    landmark: 'Prince Eduhub Main Campus',
    helpline: '+91 9610-89-2222',
    alternatePhone: '+91 9610-61-2222',
    email: 'info@princeeduhub.com',
    hours: 'Mon – Sat: 8:00 AM – 6:00 PM',
    lat: 27.610120,
    lng: 75.121800,
    zoom: 16,
    embedQuery: 'Prince Academy Palwas Road Sikar',
    image: '/uploads/aboutus.webp',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Prince+Academy+Palwas+Road+Sikar',
    facilities: [
      'CBSE / RBSE Integrated Curriculum',
      'Advanced Science, AI & Robotics Labs',
      'Indoor Swimming Pool & Horse Riding',
      'Disciplined Hostel Environment'
    ]
  }
];

export default function PcpCampusMapSection() {
  const [selectedCenter, setSelectedCenter] = useState(PCP_CENTERS[0]);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'sikar', 'jaipur'
  const [mapLayer, setMapLayer] = useState('m'); // 'm' = Roadmap, 'k' = Satellite, 'h' = Hybrid
  const [isMapSwitching, setIsMapSwitching] = useState(false);

  const filteredCenters = PCP_CENTERS.filter(c => {
    if (activeFilter === 'all') return true;
    return c.type === activeFilter;
  });

  // Switch center smoothly
  const handleSelectCenter = (center) => {
    if (center.id === selectedCenter.id) return;
    setIsMapSwitching(true);
    setSelectedCenter(center);
    setTimeout(() => {
      setIsMapSwitching(false);
    }, 350);
  };

  // Switch map view layer (Roadmap, Satellite, Hybrid)
  const handleLayerChange = (layer) => {
    setIsMapSwitching(true);
    setMapLayer(layer);
    setTimeout(() => {
      setIsMapSwitching(false);
    }, 300);
  };

  // Google Maps interactive embed URL with exact query
  const mapIframeUrl = `https://maps.google.com/maps?q=${encodeURIComponent(selectedCenter.embedQuery)}&t=${mapLayer}&z=${selectedCenter.zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <section 
      id="campus-locations" 
      className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-white via-[#faf7fe] to-white relative overflow-hidden border-t border-purple-100 select-none scroll-mt-20 font-sans"
    >
      {/* Background Luminous Accents */}
      <div 
        className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-100/50 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 -right-40 w-80 h-80 bg-[#5b40cf]/10 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="w-full max-w-[1520px] mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Compact & Reduced Vertical Height */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6edfd] border border-[#e6d0fa] text-[#2e0854] text-[11px] font-black uppercase tracking-wider mb-2 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#5b40cf]" />
            <span>Interactive Campus Navigator &amp; Google Maps</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug">
            Visit PCP Campuses &amp; Coaching Hubs Across Rajasthan
          </h2>

          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Locate our 100+ acre residential headquarters in Sikar, city classroom hubs, and Jaipur center. Select any campus to pinpoint on the interactive map, view campus facilities, and get direct GPS navigation.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3.5">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-[#2e0854] to-[#5b40cf] text-white shadow-sm scale-105'
                  : 'bg-white hover:bg-purple-50 text-slate-700 border border-purple-200/80'
              }`}
            >
              All Centers ({PCP_CENTERS.length})
            </button>
            <button
              onClick={() => setActiveFilter('sikar')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === 'sikar'
                  ? 'bg-gradient-to-r from-[#2e0854] to-[#5b40cf] text-white shadow-sm scale-105'
                  : 'bg-white hover:bg-purple-50 text-slate-700 border border-purple-200/80'
              }`}
            >
              Sikar Campuses (3)
            </button>
            <button
              onClick={() => setActiveFilter('jaipur')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === 'jaipur'
                  ? 'bg-gradient-to-r from-[#2e0854] to-[#5b40cf] text-white shadow-sm scale-105'
                  : 'bg-white hover:bg-purple-50 text-slate-700 border border-purple-200/80'
              }`}
            >
              Jaipur Center (1)
            </button>
          </div>
        </div>

        {/* Main Grid: Centers List (Left) + Interactive Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          
          {/* LEFT COLUMN: Campus Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            
            <div className="flex items-center justify-between pb-0.5 px-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                PCP Learning Centers ({filteredCenters.length})
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-[#5b40cf] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                All Campuses Open Today
              </span>
            </div>

            <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1 select-text scrollbar-thin scrollbar-thumb-purple-200">
              {filteredCenters.map((center) => {
                const isSelected = selectedCenter.id === center.id;
                
                return (
                  <div
                    key={center.id}
                    onClick={() => handleSelectCenter(center)}
                    className={`p-3 sm:p-3.5 rounded-xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group ${
                      isSelected
                        ? 'bg-white border-[#5b40cf] shadow-sm ring-1 ring-[#5b40cf]/20'
                        : 'bg-white/90 hover:bg-white border-purple-100 hover:border-purple-300 shadow-2xs hover:shadow-xs'
                    }`}
                  >
                    {/* Active Accent Bar */}
                    {isSelected && (
                      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#2e0854] via-[#5b40cf] to-[#7c52c9]" />
                    )}

                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                        isSelected 
                          ? 'bg-[#f7e8fc] text-[#2e0854] border-[#eed3f8]' 
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        <Building2 className="w-2.5 h-2.5 text-[#5b40cf]" />
                        <span>{center.badge}</span>
                      </span>

                      {isSelected ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#5b40cf] bg-purple-50 px-1.5 py-0.5 rounded-full border border-purple-200">
                          <CheckCircle2 className="w-2.5 h-2.5 text-[#5b40cf]" />
                          <span>Pinned on Map</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold text-slate-400 group-hover:text-[#5b40cf] transition-colors flex items-center gap-0.5">
                          <span>View Pin</span>
                          <ChevronRight className="w-2.5 h-2.5" />
                        </span>
                      )}
                    </div>

                    <h3 className={`text-sm sm:text-[14.5px] font-bold tracking-tight mb-1 transition-colors ${
                      isSelected ? 'text-[#2e0854]' : 'text-slate-900 group-hover:text-[#5b40cf]'
                    }`}>
                      {center.name}
                    </h3>

                    <p className="text-[11px] text-slate-600 mb-2 flex items-start gap-1 font-normal leading-relaxed">
                      <MapPin className="w-3 h-3 text-[#5b40cf] shrink-0 mt-0.5" />
                      <span>{center.address}</span>
                    </p>

                    {/* Facility Tags */}
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      {center.facilities.slice(0, 3).map((f, idx) => (
                        <span 
                          key={idx}
                          className="px-1.5 py-0.5 text-[10px] font-medium bg-[#faf7fe] text-slate-700 rounded border border-purple-100"
                        >
                          ✓ {f}
                        </span>
                      ))}
                    </div>

                    {/* Contact & Directions Bar */}
                    <div className="pt-2 border-t border-purple-50 flex items-center justify-between gap-2 text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <a
                          href={`tel:${center.helpline.replace(/[^0-9]/g, '')}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#faf7fe] hover:bg-purple-100/80 text-[#2e0854] font-bold transition-colors"
                        >
                          <Phone className="w-2.5 h-2.5 text-[#5b40cf]" />
                          <span>{center.helpline}</span>
                        </a>
                      </div>

                      <a
                        href={center.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gradient-to-r from-[#2e0854] to-[#5b40cf] hover:from-[#21053d] hover:to-[#4931b0] text-white font-bold text-[11px] shadow-2xs hover:shadow-xs transition-all"
                      >
                        <Navigation className="w-2.5 h-2.5" />
                        <span>Directions</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Quick Visit Help Banner: Compact */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-50 via-[#fcf9fe] to-purple-50 border border-purple-200/80 flex items-center justify-between gap-2.5 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white shadow-2xs flex items-center justify-center shrink-0 border border-purple-100">
                  <GraduationCap className="w-3.5 h-3.5 text-[#5b40cf]" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-[11px]">Planning a Campus Tour?</span>
                  <span className="text-slate-500 text-[10px]">Free guided campus &amp; hostel tour with counselors.</span>
                </div>
              </div>
              <a
                href="/contact"
                className="px-2.5 py-1 rounded-full bg-white hover:bg-purple-50 text-[#2e0854] font-black text-[11px] border border-purple-200 shadow-2xs transition-all shrink-0"
              >
                Book Visit
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Google Maps Canvas (7 Cols) - Compact Height */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-purple-200 shadow-sm h-[380px] sm:h-[420px] lg:h-[460px] flex flex-col group">
              
              {/* Floating Top Control Toolbar on Map */}
              <div className="absolute top-3.5 inset-x-3.5 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                
                {/* Active Center Badge Overlay */}
                <div className="pointer-events-auto bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-purple-200 shadow-sm flex items-center gap-2 text-xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5b40cf] animate-pulse" />
                  <span className="font-black text-[#2e0854]">
                    {selectedCenter.shortName}
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="text-slate-600 text-[11px] hidden sm:inline font-medium">
                    {selectedCenter.city}, Rajasthan
                  </span>
                </div>

                {/* Map Layer Switcher: Roadmap, Satellite, Hybrid */}
                <div className="pointer-events-auto flex items-center gap-1 bg-white/95 backdrop-blur-md p-1 rounded-xl border border-purple-200 shadow-sm">
                  <button
                    onClick={() => handleLayerChange('m')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      mapLayer === 'm'
                        ? 'bg-[#2e0854] text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-purple-50'
                    }`}
                  >
                    <Map className="w-3 h-3" />
                    <span>Map</span>
                  </button>
                  <button
                    onClick={() => handleLayerChange('k')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      mapLayer === 'k'
                        ? 'bg-[#2e0854] text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-purple-50'
                    }`}
                  >
                    <Satellite className="w-3 h-3" />
                    <span>Satellite</span>
                  </button>
                  <button
                    onClick={() => handleLayerChange('h')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      mapLayer === 'h'
                        ? 'bg-[#2e0854] text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-purple-50'
                    }`}
                  >
                    <Layers className="w-3 h-3" />
                    <span>Hybrid</span>
                  </button>
                </div>

              </div>

              {/* Interactive Google Map Embed */}
              <div className="w-full h-full flex-1 relative bg-slate-200">
                <iframe
                  title={`Google Maps Location - ${selectedCenter.name}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapIframeUrl}
                  className={`w-full h-full transition-opacity duration-300 ${
                    isMapSwitching ? 'opacity-40' : 'opacity-100'
                  }`}
                />
              </div>

              {/* Floating Bottom Card: Selected Campus Details Bar (Compact) */}
              <div className="absolute bottom-2.5 inset-x-2.5 z-20 pointer-events-auto">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/95 backdrop-blur-md border border-purple-200/90 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-purple-100 shadow-2xs bg-purple-50">
                      <img 
                        src={selectedCenter.image} 
                        alt={selectedCenter.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '/uploads/pcp_campus_building.png';
                        }}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-xs sm:text-sm text-slate-900 leading-tight">
                          {selectedCenter.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-normal truncate max-w-xs sm:max-w-md mt-0.5">
                        {selectedCenter.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={`tel:${selectedCenter.helpline.replace(/[^0-9]/g, '')}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-[#2e0854] font-bold text-xs transition-colors"
                    >
                      <Phone className="w-3 h-3 text-[#5b40cf]" />
                      <span className="hidden sm:inline">Call Desk</span>
                    </a>

                    <a
                      href={selectedCenter.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#2e0854] to-[#5b40cf] hover:from-[#21053d] hover:to-[#4931b0] text-white font-bold text-xs shadow-sm hover:shadow-md transition-all"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Start Navigation</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Highlights & Campus Facts Ribbon */}
        <div className="mt-12 pt-8 border-t border-purple-100 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100/60">
            <span className="block text-xl sm:text-2xl font-black text-[#2e0854]">100+ Acres</span>
            <span className="text-xs text-slate-600 font-medium">Headquarters Campus Area</span>
          </div>
          <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100/60">
            <span className="block text-xl sm:text-2xl font-black text-[#2e0854]">4 Campuses</span>
            <span className="text-xs text-slate-600 font-medium">Sikar &amp; Jaipur Presence</span>
          </div>
          <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100/60">
            <span className="block text-xl sm:text-2xl font-black text-[#2e0854]">24x7 Security</span>
            <span className="text-xs text-slate-600 font-medium">CCTV &amp; Warden Monitored</span>
          </div>
          <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100/60">
            <span className="block text-xl sm:text-2xl font-black text-[#2e0854]">Transport Hub</span>
            <span className="text-xs text-slate-600 font-medium">Direct Bus &amp; Train Connectivity</span>
          </div>
        </div>

      </div>
    </section>
  );
}
