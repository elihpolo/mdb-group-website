// Verified company facts. Each block notes where it was confirmed (checked 2026-11-17).
// Anything not confirmed by an official or public source stays out of the site.

export const SOURCES = {
  site: 'https://www.mdbgrp.com',
  gsa: 'https://www.gsaelibrary.gsa.gov/ElibMain/contractorInfo.do?contractNumber=47QRAA23D0037&contractorName=MDB+GROUP+LLC&executeQuery=YES',
  higherGov: 'https://www.highergov.com/awardee/mdb-group-llc-10005569/',
  linkedIn: 'https://www.linkedin.com/company/mdb-group-llc/about/',
  sam: 'https://sam.gov/search/?keywords=XXHKJB3UWF37',
  careers: 'https://www.mdbgrp.com/#positions',
};

export const company = {
  name: 'MDB Group, LLC',
  shortName: 'MDB Group',
  founded: 2006, // mdbgrp.com: "established in 2006"
  headquarters: {
    street: '9316 Ox Rd',
    city: 'Lorton',
    state: 'VA',
    zip: '22079',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=9316+Ox+Rd+Lorton+VA+22079',
  },
  // Primary business POC published on mdbgrp.com and GSA eLibrary
  phone: '(703) 635-8633',
  phoneHref: 'tel:+17036358633',
  email: 'joconnor@mdbgrp.com',
  // mdbgrp.com: "over 50 full-time employees holding Secret, TS, or TS/SCI clearances"
  clearedStaff: '50+',
};

// Government contracting identifiers (GSA eLibrary + HigherGov + mdbgrp.com)
export const identifiers = [
  { label: 'CAGE Code', value: '4BWN9' },
  { label: 'UEI', value: 'XXHKJB3UWF37' },
  { label: 'Primary NAICS', value: '541611' },
  { label: 'GSA MAS', value: '47QRAA23D0037' },
];

export const classifications = [
  'Service-Disabled Veteran-Owned Small Business (SDVOSB)',
  'Veteran-Owned Small Business (VOSB)',
  'Small Business',
];

// GSA eLibrary, contract 47QRAA23D0037
export const gsaContract = {
  number: '47QRAA23D0037',
  schedule: 'Multiple Award Schedule (MAS)',
  currentPeriodEnds: 'Jan 16, 2028',
  ultimateEnd: 'Jan 16, 2043',
  sins: [
    { code: '541611', title: 'Management and Financial Consulting, Acquisition and Grants Management Support, and Business Program' },
    { code: '541612HC', title: 'Agency Human Capital Strategy, Policy and Operations' },
    { code: '541614SVC', title: 'Supply and Value Chain Management' },
    { code: '611430', title: 'Professional and Management Development Training' },
    { code: 'OLM', title: 'Order-Level Materials' },
  ],
};

// Customer history as published on mdbgrp.com (prime vs. subcontract roles as stated there)
export const customers = [
  { org: 'HQDA Deputy Chief of Staff, G-8', unit: 'Force Development Directorate', role: 'Prime', since: '2015' },
  { org: 'ASA(ALT)', unit: 'PM Sensors–Aerial Intelligence', role: 'Subcontract', since: '2006' },
  { org: 'OUSD (Intelligence & Security)', unit: 'Office of the Under Secretary of Defense', role: 'Subcontract', since: '2007' },
  { org: 'U.S. Army PEO C3T', unit: 'Command, Control, Communications–Tactical', role: 'Subcontract', since: '2007' },
  { org: 'Army Force Management School', unit: 'Professional development', role: 'Support', since: '2018' },
  { org: 'TACOM', unit: 'Main Battle Tank Program', role: 'Support', since: '2018' },
  { org: 'USSOCOM', unit: 'SOF Enterprise Professional Services (SEPS)', role: 'Subcontract', since: '2022' },
];
