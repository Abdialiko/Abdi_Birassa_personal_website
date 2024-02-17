// Add any JavaScript for interactive elements here
// Example: A simple script to toggle a mobile navigation menu
document.addEventListener('DOMContentLoaded', function() {
    // Implementation for mobile menu toggle
});
function showDetails(projectId) {
    var titles = {
        'erp': 'Enterprise resource planning System (ERP) [18/03/2018 – 22/12/2018] ',
        'crime': 'Crime management system [13/02/2019 – 18/06/2019] ',
        'union': 'Union/Cooperative information management system [05/08/2019 – 27/03/2020] ',
        'survey': 'Survey management system [22/04/2020 – 06/11/2020] ',
        'guardium': 'IBM Security Guardium Data Protection for Databases [22/12/2020 – 18/03/2021] ',
        'waf': 'WAF F5 (Web Application Firewall) [08/04/2021 – 21/06/2021] ',
        'book': 'Book and Inventory management System ...',
        'gotrip': `GoTrip`,
    };
    var Image = {
        'erp': 'Enterprise resource planning System (ERP) [18/03/2018 – 22/12/2018] ...',
        'crime': 'Crime management system [13/02/2019 – 18/06/2019] ...',
        'union': 'Union/Cooperative information management system [05/08/2019 – 27/03/2020] ...',
        'survey': 'Survey management system (web based and mobile application) [22/04/2020 – 06/11/2020] ...',
        'guardium': 'IBM Security Guardium Data Protection for Databases [22/12/2020 – 18/03/2021] ...',
        'waf': 'WAF F5 (Web Application Firewall) [08/04/2021 – 21/06/2021] ...',
        'book': 'Book and Inventory management System ...',
        'gotrip': ` <img src="./cer1.jpg" class="cer" alt="Certificate Image">`,
    };
    var details = {
        'erp': `'Enterprise resource planning System (ERP) [18/03/2018 – 22/12/2018] This system is developed for Addis Ababa government office. Currently as pilot six governments office have been
        selected and are using the system. It has different module like HR, Budget, plan, material, archive, correspondent,
        finance, procurement, license, vehicle projects and customer management. The system is inter operable that
        each module work together as one. This helps the organization to minimize the labor
        intensive manual works. They can easily generate reports and get information’s. In addition to the systems allow
        users to create their own custom fields, pages, module and report dynamically.  ...'`,
        'crime': `'Crime management system [13/02/2019 – 18/06/2019] The system developed for Addis Ababa police commission. It records all criminal information starting from the
        case started, detail investigation of the case up to court decision. It helps the commission to manage records
        electronically get any crime information. To avoid network and connection issue the system have offline version.
        This allow 10 Addis Ababa sub cities and 52 police station record their data locally and sync to the central
        database.  ...'`,
        'union': `'Union/Cooperative information management system [05/08/2019 – 27/03/2020] The system is developed for Addis Ababa trade bureau. This helps to record information about different types
        unions and cooperatives. In the system there about six type of cooperatives and two unions (Sacco, consumers,
        manufactures condominium, service and land) The system record members of the cooperatives and give licenses.
        At the end of the financial year it also allows the bureau to audit and inspect all cooperatives centrally. The
        system is hosted centrally at Addis Ababa trade bureau and cooperatives are accessing using coop net. Also it
        deployed on cloud server. ...'`,
        'survey': `'Survey management system (web based and mobile application) [22/04/2020 – 06/11/2020] The system is developed for Addis Ababa Education Bureau. I work on this system as Project manager. This helps
        to collect information of each school. After user gather the information of school. They can easily generate
        reports and get information’s. In addition to the systems allow users to create their own custom fields, pages,
        module and report dynamically. ...'`,
        'guardium': `'IBM Security Guardium Data Protection for Databases [22/12/2020 – 18/03/2021] The project is deployed for United Bank to implement IBM Security Guardium Data Protection and Vulnerability
        Assessment (VA) solutions to monitor multiple databases for logs and events for routine maintenance and
        troubleshooting. The solutions were to log database activity for audit purposes and provide alerts on potential
        threats and issues which would allow United Bank to be more proactive rather than reactive. ...'`,
        'waf': `'WAF F5 (Web Application Firewall) [08/04/2021 – 21/06/2021] The project deployed for United and Buna Bank to protect your applications from data breaches by fixing
         vulnerabilities and stopping attacks. F5 Advanced (Web Application Firewall) provides malicious bot protection,
        application-layer encryption, API inspection, and behavior analytics to help defend against application attacks. ...'`,
        'book':  ` Book and inventory management system is a system that is designed to manage the amount of book distribution
        from head office to government and nongovernment schools in Addis Ababa and the 11 sub city stokes in the
        city. The amount of sent book requests, approved book requests, sent purchase requests, approved purchase
        requests, total number of books available in stoke, completed and pending book requests all are registered and
        recorded in the system. The allocated budget is also recorded and updated time to time along with the expense
        and revenue of the office. ...`,
        'gotrip': `"GoTrip" is an innovative ride-hailing platform developed by Africa Technology PLC in Ethiopia. It is designed to
        provide users with a convenient and reliable transportation solution, tailored to meet the unique needs of the
        Ethiopian market. This project involves the development of both a web and mobile application to cater to the
        diverse needs of users across various devices. The platform aims to streamline the process of booking rides,
        ensuring efficiency, safety, and user satisfaction. ...`,
    };
    
    document.getElementById('project-titles').innerHTML = titles[projectId] || 'No titles available';
    document.getElementById('project-details').innerHTML = details[projectId]  || 'No details available';
    document.getElementById('project-Image').innerHTML = Image[projectId]  || 'No details available';
}
function showcer(cerid) {
    var details = {
        'cer1': './cer1.jpg',
        'cer2': './cer2.jpg',
        'cer3': './cer3.jpg',
    };
    var imageUrl = details[cerid] || 'No details available';
    if (cerid === 'cer1') {
        document.getElementById('cer').innerHTML = `<img src="${imageUrl}" class="cer" alt="Certificate Image">
        </br>.</br></br>
        <div class="verify">
        <a class="btn0" href="https://www.credly.com/badges/78103b3a-2156-4d56-bf44-edcfb5629c23/public_url"> Verify Here</a> </div>`;
    } else if (cerid === 'cer2') {
        document.getElementById('cer').innerHTML = `<img src="${imageUrl}" class="cer" alt="Certificate Image">
        </br>.</br></br>
        <div class="verify">
        <a class="btn0" href="https://www.credly.com/badges/aafc1378-e0c2-4845-8813-5cfa30374483/public_url"> Verify Here</a> </div>`;
    }else{
        document.getElementById('cer').innerHTML = `<img src="${imageUrl}" class="cer" alt="Certificate Image">`;
    }
}
var mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

scroll to the top of the document
mybutton.onclick = function() {
    document.body.scrollTop = 0;     document.documentElement.scrollTop = 0;