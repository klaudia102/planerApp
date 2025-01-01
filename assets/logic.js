$(document).ready(function () {

    const today = dayjs().format('dddd, D MMMM YYYY')

    $('#currentDay').text(today);

    const currentHour = dayjs().format('H');


    $('.time-block').each(function () {
        const blockHour = parseInt($(this).find('.hour').text());
        const textarea = $(this).find('textarea');

        textarea.removeClass('past present future');

        if (blockHour < currentHour) {
            textarea.addClass('past');
        }
        else if (blockHour == currentHour) {
            textarea.addClass('present');
        } else {
            textarea.addClass('future');
        }


    });

    $('.saveBtn').on('click', function () {
        const hour = $(this).siblings('.hour').text().trim();
        const eventText = $(this).siblings('textarea').val();
        localStorage.setItem(hour, eventText);

        // Highlight save button
        $(this).addClass('saved-highlight');
        setTimeout(() => $(this).removeClass('saved-highlight'), 1000);
    });

    // Load events from local storage
    $('.time-block').each(function () {
        const hour = $(this).find('.hour').text().trim();
        const savedEvent = localStorage.getItem(hour);

        if (savedEvent) {
            $(this).find('textarea').val(savedEvent);
        }
    });

})
