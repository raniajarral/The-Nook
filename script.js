// Article data
const articlesData = {
    'article1': {
        title: 'Islamic law and the colonial encounter in British India',
        type: 'Book',
        description: 'In contemporary debates regarding Muslim identity in South Asia no issue is as prominent or as hotly contested as the character and social role of Islamic law. Though the controversies are directly relevant to present day concerns the questions themselves are neither new nor innocent of colonial influence. The existing corpus of Islamic law in the subcontinent owes a great deal to the legacy of colonial jurists who systematised and gave shape to Anglo-Muhammadan law over many decades. In this essay the history of Anglo-Muhammadan scholarship is considered in light of the colonial need for precise and reliable information about indigenous laws. In their preference for textual sources the courts were inclined to endorse highly orthodox forms of Islamic law which were applied more widely and rigorously than in the pre-colonial period ultimately contributing to a new politics of Muslim identity in the twentieth century.',
        sourceLink: 'https://wrrc.wluml.org/node/5627'
    },
    'article2': {
        title: 'A Fanonian Perspective on Double Consciousness',
        type: 'Paper',
        description: 'This study examines the historical parallel between the intellectual work of W.E.B. Du Bois and Frantz Fanon. In 1903, Du Bois coined a term called "double consciousness" to explain the thought process of being both a Negro (i.e., Black) and an American (i.e., non-Black) in the United States. Fifty years later, Fanon wrote a detailed analysis of a similar theme in a book called "Black Skin, White Masks". From two different eras, these two scholars/activists provided valuable information on the mental conflict associated with having a dual identity. To provide the basis for finding solutions to the many social crises experienced within the Black community, a Fanonian perspective on double consciousness will be discussed. In conclusion, a recommendation will be put forth to focus on a single-minded consciousness to rescue, to reconstruct, and to revitalize the minds of those who have been miseducated.',
        sourceLink: 'https://www.jstor.org/stable/40034879'
    },
    'article3': {
        title: 'Islamist Education: American-Funded Textbooks In Afghanistan',
        type: 'paper',
        description: ' Textbooks designed to teach math and language arts are filled with depictions of Kalashnikov rifles, grenades, and military ammunition.2 However, the great irony is that these textbooks were produced, funded, and distributed by the US government using taxpayer dollars. The Taliban regime which President Bush deplored as an enemy which "aids terrorists" and "barbaric criminals who profane a great religion by commiting murder in its name" is using and reprinting American-funded materials to propagate its radical ideology among the Afghan youth.3 Why would the United States fund textbooks that promote a dangerous message antithetical to American values? ',
        sourceLink: 'https://sites.williams.edu/wurj/social-sciences/islamist-education-american-funded-textbooks-in-afghanistan/'
    },
     'article4': {
        title: 'How the US Stole Central America (With Bananas)',
        type: 'Video',
        description: 'The history of the Cavendish banana reveals a tale of American imperialism and corporate greed, where companies like United Fruit exploited Central America for profit. Their control over supply chains led to political upheaval and human rights abuses, culminating in the current threat of extinction due to disease, mirroring past exploitative practices.',
        sourceLink: 'https://youtu.be/WWBCl8huNMA?si=cyY7N89yyEBtiyVz'
    },
     'article5': {
        title: 'Shooting an Elephant',
        type: 'Essay',
        description: 'In the essay, Orwell explores themes of imperialism, captivity, and authority. The officer struggles with the choice to kill the elephant. His moral compass tells him to observe and report, but he must maintain an atmosphere of authority, holding the rifle among the crowd of Burmese natives.',
        sourceLink: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/shooting-an-elephant/'
    },
     'article6': {
        title: "From the A'yan to Amir: The Abd al-Karim of the Moroccan Rif",
        type: 'Paper',
        description: 'The thesis explores the life and role of Abd al-Karim in the Moroccan Rif region during the early 20th century. It likely examines the transition from the influence of local notables (the A yan) to the leadership of Abd al-Karim (Amir), focusing on the period from 1900 to 1921.',
        sourceLink: 'https://summit.sfu.ca/_flysystem/fedora/sfu_migrate/7908/b14986115.pdf'
    },
     'article7': {
        title: 'Unpacking American Imperialism: a Critical Analysis',
        type: 'Essay',
        description: '',
        sourceLink: 'https://gradesfixer.com/free-essay-examples/critical-essay-on-american-imperialism/'
    },
     'article8': {
        title: 'The Civilizing Mission',
        type: 'Essay',
        description: "Understanding The Duty of Westerners to 'Civilize' So-called 'Inferior' Cultures",
        sourceLink: 'https://gradesfixer.com/free-essay-examples/imperialism/'
    },
};

// Open modal function
function openModal(articleId) {
    const article = articlesData[articleId];
    if (!article) return;

    document.getElementById('modalTitle').textContent = article.title;
    document.getElementById('modalDescription').textContent = article.description;
    document.getElementById('modalSourceLink').href = article.sourceLink;
    
    const typeBadge = document.getElementById('modalType');
    typeBadge.textContent = article.type;
    typeBadge.className = `type-badge ${article.type}`;

    document.getElementById('articleModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close modal function
function closeModal() {
    document.getElementById('articleModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('articleModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
