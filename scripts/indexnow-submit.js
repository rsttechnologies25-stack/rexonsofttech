/**
 * IndexNow Batch Submission Script for RexonSoftTech
 * Protocol Documentation: https://www.indexnow.org/documentation
 * Supported Search Engines: Microsoft Bing, Yandex, Seznam.cz, Naver
 *
 * Usage:
 *   node scripts/indexnow-submit.js
 */

const https = require('https');

const HOST = 'rexonsofttech.in';
const KEY = 'f7a29e4d58c14b3da0e691238475bcde';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Canonical URLs to submit for rapid re-crawling and indexing
const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/about`,
  `https://${HOST}/services`,
  `https://${HOST}/services/erp-development`,
  `https://${HOST}/services/custom-software-development`,
  `https://${HOST}/services/website-development`,
  `https://${HOST}/services/web-application-development`,
  `https://${HOST}/services/mobile-app-development`,
  `https://${HOST}/services/ai-automation`,
  `https://${HOST}/services/cybersecurity-vapt`,
  `https://${HOST}/erp`,
  `https://${HOST}/erp/steel-fabrication`,
  `https://${HOST}/erp/inventory-management`,
  `https://${HOST}/erp/gst-billing`,
  `https://${HOST}/case-studies`,
  `https://${HOST}/case-studies/perambur-srinivasa`,
  `https://${HOST}/case-studies/vinod-computers`,
  `https://${HOST}/case-studies/vinod-electronics`,
  `https://${HOST}/case-studies/paras-jewellers`,
  `https://${HOST}/blog`,
  `https://${HOST}/blog/why-custom-erp-beats-off-the-shelf-software-for-indian-smbs`,
  `https://${HOST}/blog/erp-for-steel-fabrication-production-management`,
  `https://${HOST}/blog/custom-erp-vs-tally-when-to-upgrade`,
  `https://${HOST}/blog/multi-warehouse-inventory-control-best-practices`,
  `https://${HOST}/blog/automating-gst-e-invoicing-e-way-bills-erp`,
  `https://${HOST}/blog/how-to-choose-custom-software-development-company-chennai`,
  `https://${HOST}/blog/web-application-security-audit-checklist-vapt`,
  `https://${HOST}/blog/mobile-app-development-trends-business-enterprises`,
  `https://${HOST}/careers`,
  `https://${HOST}/privacy`,
  `https://${HOST}/terms`
];

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URL_LIST
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
};

console.log(`[IndexNow] Preparing submission of ${URL_LIST.length} URLs for host: ${HOST}...`);
console.log(`[IndexNow] Verification Key: ${KEY}`);
console.log(`[IndexNow] Key Location: ${KEY_LOCATION}`);

const req = https.request(options, (res) => {
  let responseBody = '';
  res.on('data', (chunk) => { responseBody += chunk; });
  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log(`[IndexNow] SUCCESS (HTTP 200): All URLs submitted successfully to IndexNow!`);
    } else if (res.statusCode === 202) {
      console.log(`[IndexNow] ACCEPTED (HTTP 202): URLs received and queued for crawling.`);
    } else {
      console.log(`[IndexNow] Status code: ${res.statusCode} ${res.statusMessage}`);
      if (responseBody) console.log(`[IndexNow] Response: ${responseBody}`);
    }
  });
});

req.on('error', (e) => {
  console.error(`[IndexNow] Network Error: ${e.message}`);
});

req.write(payload);
req.end();
