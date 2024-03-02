
var typed = new Typed(".typing-text", {
    strings: [ "project Manager", "IT Coordinator", "System Analyst",  "ICT Officer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('searchCertificationsInput').addEventListener('keyup', function() {
        let input = document.getElementById('searchCertificationsInput');
        let filter = input.value.toUpperCase();
        let projectsList = document.getElementById("projects-list");
        let projects = projectsList.getElementsByClassName('project-card1');

        for (let i = 0; i < projects.length; i++) {
            let h1 = projects[i].getElementsByTagName("h1")[0];
            if (h1.innerHTML.toUpperCase().indexOf(filter) > -1) {
                projects[i].style.display = "";
            } else {
                projects[i].style.display = "none";
            }
        }
    });
});
function filterProjects() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let projectsList = document.getElementById("projects-list");
    let projects = projectsList.getElementsByClassName('project-card');

    for (let i = 0; i < projects.length; i++) {
        let h1 = projects[i].getElementsByTagName("h1")[0];
        let txtValue = h1.textContent || h1.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            projects[i].style.display = "";
        } else {
            projects[i].style.display = "none";
        }
    }
}


// Attach the filterProjects function to the search input field

// Add event listeners for the next and previous buttons

document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1);
  resetInterval();
});

document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1);
  resetInterval();
});

// Resets the slide interval when manually navigating
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(function() { plusSlides(1); }, 5000);
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.nav-toggle').addEventListener('click', function () {
        var nav = document.querySelector('.nav-link ul');
        if (nav.style.display === "block") {
            nav.style.display = "none"; 
        } else {
            nav.style.display = "block";
        }
    });
});


function showDetails(projectId = 'erp') {
    var titles = {
        'erp': 'Enterprise resource planning System (ERP)  ',
        'crime': 'Crime management system  ',
        'union': 'Union/Cooperative information management system ',
        'survey': 'Survey management system  ',
        'guardium': 'IBM Security Guardium Data Protection for Databases  ',
        'waf': 'WAF F5 (Web Application Firewall)  ',
        'book': 'Book and Inventory management System ...',
        'gotrip': `GoTrip`,
    };
    var Image = {
        'erp': '    <img src="../Image/erp.jpg     " class="pro" alt="Certificate Image">',
        'crime': '  <img src="../Image/crime.jpg   " class="pro"  alt="Certificate Image">',
        'union': '   <img src="../Image/coop.jpg   " class="pro"  alt="Certificate Image">',
        'survey': ' <img src="../Image/survey.jpg  " class="pro"  alt="Certificate Image">',
        'guardium':'<img src="../Image/guardium.jpg" class="pro"  alt="Certificate Image">',
        'waf': '    <img src="../Image/waf5.jpg    " class="pro"  alt="Certificate Image">',
        'book': '   <img src="../Image/library.jpg" class="pro"  alt="Certificate Image">',
        'gotrip': ` <img src="../Image/gotrip.jpg" class="pro" alt="Certificate Image">`,
    };
    var details = {
        'erp': `'Enterprise resource planning System (ERP)  This system is developed for Addis Ababa government office. Currently as pilot six governments office have been
        selected and are using the system. It has different module like HR, Budget, plan, material, archive, correspondent,
        finance, procurement, license, vehicle projects and customer management. The system is inter operable that
        each module work together as one. This helps the organization to minimize the labor
        intensive manual works. They can easily generate reports and get information’s. In addition to the systems allow
        users to create their own custom fields, pages, module and report dynamically.  ...'`,
        'crime': `'Crime management system  The system developed for Addis Ababa police commission. It records all criminal information starting from the
        case started, detail investigation of the case up to court decision. It helps the commission to manage records
        electronically get any crime information. To avoid network and connection issue the system have offline version.
        This allow 10 Addis Ababa sub cities and 52 police station record their data locally and sync to the central
        database.  ...'`,
        'union': `'Union/Cooperative information management system  The system is developed for Addis Ababa trade bureau. This helps to record information about different types
        unions and cooperatives. In the system there about six type of cooperatives and two unions (Sacco, consumers,
        manufactures condominium, service and land) The system record members of the cooperatives and give licenses.
        At the end of the financial year it also allows the bureau to audit and inspect all cooperatives centrally. The
        system is hosted centrally at Addis Ababa trade bureau and cooperatives are accessing using coop net. Also it
        deployed on cloud server. ...'`,
        'survey': `'Survey management system (web based and mobile application)  The system is developed for Addis Ababa Education Bureau. I work on this system as Project manager. This helps
        to collect information of each school. After user gather the information of school. They can easily generate
        reports and get information’s. In addition to the systems allow users to create their own custom fields, pages,
        module and report dynamically. ...'`,
        'guardium': `'IBM Security Guardium Data Protection for Databases The project is deployed for United Bank to implement IBM Security Guardium Data Protection and Vulnerability
        Assessment (VA) solutions to monitor multiple databases for logs and events for routine maintenance and
        troubleshooting. The solutions were to log database activity for audit purposes and provide alerts on potential
        threats and issues which would allow United Bank to be more proactive rather than reactive. ...'`,
        'waf': `'WAF F5 (Web Application Firewall) The project deployed for United and Buna Bank to protect your applications from data breaches by fixing
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
    togglePopup();
}
function showcer(cerid) {
    var details = {
        'cer1': './image/cer1.jpg',
        'cer2': './image/cer2.jpg',
        'cer3': './image/cer3.jpg',
        '1certfi': './image/1certfi.jpg',
        '2certfi': './image/2certfi.jpg',
        '3certfi': './image/3certfi.jpg',
        '4certfi': './image/4certfi.jpg',
    };
    var imageUrl = details[cerid] || 'No details available';
    if (cerid === 'cer1') {
        document.getElementById('cer').innerHTML = `<img src="${imageUrl}" class="cer" alt="Certificate Image">`
        document.getElementById('cer1').innerHTML = `<div class="verify"><a class="btn0" href="https://www.credly.com/badges/78103b3a-2156-4d56-bf44-edcfb5629c23/public_url"> Verify Here</a> </div>`;

    } else if (cerid === 'cer2') {
        document.getElementById('cer').innerHTML = `<img src="${imageUrl}" class="cer" alt="Certificate Image">`
        document.getElementById('cer1').innerHTML = `<div class="verify"><a class="btn0" href="https://www.credly.com/badges/aafc1378-e0c2-4845-8813-5cfa30374483/public_url"> Verify Here</a> </div>`;
    }else{
        document.getElementById('cer').innerHTML = `<img src="${imageUrl}" class="cer" alt="Certificate Image">`;
        document.getElementById('cer1').innerHTML = `<div class="verify"></div>`;
    }
}



mybutton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    navToggle.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('showing');
    });
});
function togglePopup() {
    var popup = document.querySelector('.popup');
    var overlay = document.querySelector('.overlay');
    var isShown = window.getComputedStyle(popup).display === "block";
    popup.style.display = isShown ? "none" : "block";
    overlay.style.display = isShown ? "none" : "block";
}
