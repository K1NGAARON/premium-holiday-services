function changeReviews() {
    const reviews = [
        {
            name: 'Emma J.',
            review: "De diensten hebben mijn pand naar een nieuw niveau getild. Een waardevolle partner voor elke eigenaar.",
        },
        {
            name: 'Thomas D.',
            review: "Premium Holiday Services heeft mijn verwachtingen overtroffen met hun uitmuntende check-in service en 24/7 bijstand. Mijn gasten genieten van een zorgeloos verblijf, en ik geniet van een stressvrije verhuurervaring.",
        },
        {
            name: 'Olivier D.',
            review: "De lakenservice van Premium Holiday Services heeft mijn gasten aangenaam verrast. De bedden zijn altijd prachtig opgemaakt, wat bijdraagt aan de algehele luxe sfeer van mijn vakantieverblijf.",
        },
        {
            name: 'Hugo B.',
            review: "Als eigenaar waardeer ik de flexibiliteit van Premium Holiday Services bij check-in en check-out. Ze nemen de stress weg en zorgen ervoor dat alles perfect verloopt, zelfs bij last-minute wijzigingen.",
        },
        {
            name: 'Eva C.',
            review: "Als eigenaar waardeer ik de persoonlijke touch door Premium Holiday Services. Ze nemen de tijd om mijn gasten warm te verwelkomen en te bedanken, wat mijn beoordelingen ferm heeft verbeterd.",
        },
        {
            name: 'Amélie R.',
            review: "Gasten waarderen het comfort en de zorg waarmee hun bedden zijn opgemaakt. Bijkomend is de poetsdienst van Premium Holiday Services van topkwaliteit.",
        },
    ];

    $('.dot').removeClass('active');
    $(this).addClass('active');

    const dotIndex = $('.dot').index(this);
    const reviewContainer = $('.review-wrapper');

    reviewContainer.find('.review-author').text(reviews[dotIndex].name);
    reviewContainer.find('.review-body').text(reviews[dotIndex].review);
};

$('.dot').click(changeReviews);

document.addEventListener( 'DOMContentLoaded', function() {
    new Splide( '#gallery-slides', {
        heightRatio: 0.3,
        perPage: 3,
        perMove: 1,
        breakpoints: {
            1000: {
                heightRatio: 0.5,
                perPage: 2,
            }
        },
        type: 'loop',
        speed: 3000,
    }).mount();
});