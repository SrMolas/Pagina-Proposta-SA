// Application data
const projectData = {
  "project_summary": {
    "total_value": "R$ 39.575,48",
    "execution_time": "15 dias úteis (dois turnos)",
    "total_area": "65,16 m²"
  },
  "budget_table": [
    {
      "description": "Mão de obra diurna",
      "value": "R$ 27.323,88",
      "observation": "Execução normal (07h-16h)"
    },
    {
      "description": "Adicional 2º turno (20%)",
      "value": "R$ 1.639,44",
      "observation": "Turno extra para garantir prazo de 15 dias"
    },
    {
      "description": "Custo Direto",
      "value": "R$ 28.963,32",
      "observation": "Soma dos itens anteriores"
    },
    {
      "description": "BDI 22%",
      "value": "R$ 6.371,93",
      "observation": "Aplicado sobre atividades de terceiros"
    },
    {
      "description": "Nota fiscal 12%",
      "value": "R$ 4.240,23",
      "observation": "Sobre (Custo Direto + BDI)"
    },
    {
      "description": "TOTAL GERAL",
      "value": "R$ 39.575,48",
      "observation": "Valor final da proposta"
    }
  ],
  "services": [
    {
      "title": "Demolição de piso térreo",
      "icon": "🔨",
      "description": "Remoção completa do piso existente e preparo da base para novo assentamento.",
      "details": "Processo de demolição completa do piso existente, incluindo remoção de entulho e preparação da base para o novo contrapiso. Executado conforme normas técnicas vigentes com carga e retirada de entulho."
    },
    {
      "title": "Assentamento de pisos",
      "icon": "🏗️",
      "description": "Aplicação de porcelanato Portinari conforme padrão Subway.",
      "details": "Instalação de pisos Portinari Loft SGR Bold 30x60cm (39,44 m²) e Duramax AL Hard Bold 60x60cm (22,15 m²), seguindo rigorosamente o padrão da franquia Subway. Inclui argamassa colante AC-III e rejuntamento."
    },
    {
      "title": "Revestimentos cerâmicos",
      "icon": "🧱",
      "description": "Instalação do característico padrão 'subway tile'.",
      "details": "Aplicação de revestimento Portinari Decora WH LUX 8,2x25,7cm (23,98 m²) e White Plain Matte 30x60cm, criando o padrão visual característico das lojas Subway. Inclui preparação de superfície e rejuntamento."
    },
    {
      "title": "Forro mineral e gesso",
      "icon": "🏠",
      "description": "Sistema de forros conforme especificações acústicas e visuais.",
      "details": "Execução de forro mineral AMF 625x625mm (42,39 m²) e forro de gesso acartonado com tabica de 3cm (40,39 m²), atendendo às especificações técnicas e padrão visual da franquia."
    },
    {
      "title": "Pinturas especializadas",
      "icon": "🎨",
      "description": "Aplicação das cores oficiais da marca Sherwin Williams.",
      "details": "Aplicação de tintas Sherwin Williams nas cores SW6734 Espalier e SW6925 Envy, mantendo rigorosamente o padrão visual da franquia. Inclui preparação completa de superfícies e duas demãos de tinta."
    },
    {
      "title": "Instalações elétricas",
      "icon": "⚡",
      "description": "Sistema elétrico completo com 55 luminárias LED.",
      "details": "Execução de 40 pontos elétricos adicionais e instalação de 55 luminárias LED de embutir (redondas 18W, quadradas 18W e lineares). Todo o sistema segue rigorosamente a norma ABNT NBR 5410."
    },
    {
      "title": "Sistema de segurança",
      "icon": "📹",
      "description": "Instalação de pontos para câmeras e revisão completa de fiação.",
      "details": "Instalação de 12 pontos para câmeras de segurança e revisão completa da fiação existente, garantindo segurança operacional e conformidade técnica do sistema."
    },
    {
      "title": "Manutenção de acessos",
      "icon": "🚪",
      "description": "Revisão e ajuste das portas de enrolar.",
      "details": "Revisão completa de 2 portas de enrolar, incluindo lubrificação preventiva, ajuste de molas, verificação dos sistemas de travamento e teste de funcionamento."
    }
  ],
  "materials": [
    {
      "name": "Piso Portinari Loft SGR Bold 30x60cm",
      "icon": "🏢",
      "description": "Porcelanato de alta resistência para áreas de grande circulação. Aplicação: 39,44 m² nas áreas principais. Resistente a manchas e de fácil limpeza."
    },
    {
      "name": "Piso Portinari Duramax AL Hard Bold 60x60cm",
      "icon": "💎",
      "description": "Porcelanato técnico para áreas úmidas. Aplicação: 22,15 m² nas áreas úmidas. Antiderrapante e resistente à umidade."
    },
    {
      "name": "Revestimento Portinari Decora WH LUX",
      "icon": "🧱",
      "description": "Revestimento cerâmico brilhante em formato 'subway'. Aplicação: 23,98 m² no padrão subway tile. Dimensões: 8,2x25,7cm com acabamento de alto brilho."
    },
    {
      "name": "Forro Mineral AMF",
      "icon": "🔲",
      "description": "Placas de forro mineral 625x625mm. Aplicação: 42,39 m² nas áreas públicas. Excelente absorção acústica, ideal para ambientes comerciais de alimentação."
    },
    {
      "name": "Tintas Sherwin Williams",
      "icon": "🎭",
      "description": "Tintas premium nas cores oficiais Subway: SW6734 Espalier e SW6925 Envy. Acabamento acetinado para fácil limpeza e manutenção."
    },
    {
      "name": "Luminárias LED Embutidas",
      "icon": "💡",
      "description": "55 unidades variadas: luminárias de embutir redondas 18W, quadradas 18W e lineares. Alta eficiência energética e distribuição uniforme de luz."
    }
  ],
  "timeline": [
    {
      "period": "Dias 1-3",
      "activity": "Demolição e preparação",
      "details": "Mobilização da equipe, instalação de tapumes, demolição do piso térreo existente e retirada completa de entulho"
    },
    {
      "period": "Dias 4-5",
      "activity": "Contrapiso e impermeabilização",
      "details": "Execução de novo contrapiso, impermeabilização de pontos úmidos e processo de cura acelerada"
    },
    {
      "period": "Dias 6-8",
      "activity": "Assentamento de pisos",
      "details": "Instalação de pisos sobre piso existente (onde permitir) ou novo porcelanato conforme especificação por área"
    },
    {
      "period": "Dias 9-10",
      "activity": "Forros e instalações elétricas",
      "details": "Instalação de forros mineral e gesso, execução da infraestrutura elétrica e instalação de luminárias"
    },
    {
      "period": "Dias 11-12",
      "activity": "Pinturas e revisões",
      "details": "Execução de pinturas nas cores padrão, instalação de rodapés, revisão de portas de enrolar e instalação de pontos de câmeras"
    },
    {
      "period": "Dias 13-14",
      "activity": "Limpeza e ajustes finais",
      "details": "Limpeza técnica completa, verificação do padrão de qualidade Subway e execução de ajustes finais"
    },
    {
      "period": "Dia 15",
      "activity": "Entrega técnica",
      "details": "Vistoria final com o cliente, testes de todos os sistemas instalados e entrega oficial da obra"
    }
  ],
  "additional_notes": [
    "O orçamento não inclui fachada ACM, elevador ou marcenaria, que serão orçados à parte e acompanhados por nossa equipe técnica.",
    "Caso o piso permita, será executado piso sobre piso; se não permitir, será feita demolição e novo contrapiso (sem alterar o valor final).",
    "O elevador monta-carga está em fase de orçamento e projeto estrutural, não comprometendo o prazo de execução da reforma.",
    "Mudança de ponto do ar-condicionado, serviços de marcenaria e demais ajustes poderão ser incluídos via aditivo conforme decisão do cliente.",
    "Todos os materiais seguem rigorosamente as especificações técnicas e padrão visual da franquia Subway."
  ]
};

// DOM elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalDetails = document.getElementById('modal-details');
const closeModal = document.querySelector('.close');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    populateBudgetTable();
    populateServices();
    populateMaterials();
    populateTimeline();
    populateAdditionalNotes();
    initializeModal();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const offsetTop = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
                
                // Update active nav link
                setTimeout(() => {
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }, 100);
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', debounce(updateActiveNavLink, 100));
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Populate budget table
function populateBudgetTable() {
    const tableBody = document.getElementById('budget-table-body');
    if (!tableBody) return;
    
    projectData.budget_table.forEach((item, index) => {
        const row = document.createElement('tr');
        if (item.description === 'TOTAL GERAL') {
            row.classList.add('total-row');
        }
        
        row.innerHTML = `
            <td>${item.description}</td>
            <td class="budget-value">${item.value}</td>
            <td>${item.observation}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Populate services
function populateServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;
    
    projectData.services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');
        serviceCard.setAttribute('data-service-index', index);
        serviceCard.setAttribute('tabindex', '0');
        serviceCard.setAttribute('role', 'button');
        serviceCard.setAttribute('aria-label', `Ver detalhes de ${service.title}`);
        
        serviceCard.innerHTML = `
            <div class="service-card-image">
                ${service.icon}
            </div>
            <div class="service-card-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;
        
        serviceCard.addEventListener('click', () => openServiceModal(index));
        serviceCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openServiceModal(index);
            }
        });
        
        servicesGrid.appendChild(serviceCard);
    });
}

// Populate materials
function populateMaterials() {
    const materialsGrid = document.getElementById('materials-grid');
    if (!materialsGrid) return;
    
    projectData.materials.forEach(material => {
        const materialCard = document.createElement('div');
        materialCard.classList.add('material-card');
        
        materialCard.innerHTML = `
            <div class="material-image">
                ${material.icon}
            </div>
            <div class="material-info">
                <h4>${material.name}</h4>
                <p>${material.description}</p>
            </div>
        `;
        
        materialsGrid.appendChild(materialCard);
    });
}

// Populate timeline
function populateTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
    projectData.timeline.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-period">${item.period}</div>
                <div class="timeline-activity">${item.activity}</div>
                <p class="timeline-details">${item.details}</p>
            </div>
            <div class="timeline-marker"></div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Populate additional notes
function populateAdditionalNotes() {
    const notesList = document.getElementById('notes-list');
    if (!notesList) return;
    
    projectData.additional_notes.forEach(note => {
        const listItem = document.createElement('li');
        listItem.textContent = note;
        notesList.appendChild(listItem);
    });
}

// Modal functionality
function initializeModal() {
    if (closeModal) {
        closeModal.addEventListener('click', closeServiceModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeServiceModal();
            }
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeServiceModal();
        }
    });
}

function openServiceModal(serviceIndex) {
    if (!modal) return;
    
    const service = projectData.services[serviceIndex];
    
    if (modalTitle) modalTitle.textContent = service.title;
    if (modalDescription) modalDescription.textContent = service.description;
    if (modalDetails) modalDetails.innerHTML = `<p><strong>Detalhes técnicos:</strong> ${service.details}</p>`;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Focus management
    const firstFocusableElement = modal.querySelector('.close');
    if (firstFocusableElement) {
        firstFocusableElement.focus();
    }
}

function closeServiceModal() {
    if (!modal) return;
    
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Utility functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Print functionality enhancement
window.addEventListener('beforeprint', function() {
    closeServiceModal();
    
    // Ensure all content is visible for printing
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('active');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for content to be populated
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.service-card, .material-card, .timeline-item, .summary-card');
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }, 100);
});

// Enhanced accessibility features
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }
});

// Handle window resize
window.addEventListener('resize', debounce(function() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu && window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
}, 250));

// Form submission handler (if needed for future enhancements)
function handleContactForm(event) {
    event.preventDefault();
    // This would handle form submission if a contact form is added
    console.log('Contact form submitted');
}

// Export functions for potential future use
window.SubwayApp = {
    scrollToTop: scrollToTop,
    openServiceModal: openServiceModal,
    closeServiceModal: closeServiceModal
};