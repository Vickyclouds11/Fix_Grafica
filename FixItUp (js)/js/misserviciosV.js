
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let monthNumber = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    let dates = document.getElementById('dates');
    let month = document.getElementById('month');
    let year = document.getElementById('year');

    let prevMonthDOM = document.getElementById('prev-month');
    let nextMonthDOM = document.getElementById('next-month');

    let eventModal = document.getElementById('eventModal');
    let closeModal = document.getElementById('closeModal');

    let eventTitle = document.getElementById('eventTitle');
    let eventDate = document.getElementById('eventDate');
    let eventTime = document.getElementById('eventTime');
    let eventLocation = document.getElementById('eventLocation');

    let events = [
        {
            title: 'Galeria periodo arcaico',
            start: '2024-06-14T10:30:00',
            end: '2024-06-14T12:30:00',
            location: 'Sala de Conferencias A'
        },
        {
            title: 'Galeria  periodo Clasico',
            start: '2024-06-19T14:00:00',
            end: '2024-06-19T16:00:00',
            location: 'Auditorio Principal'
        },
        {
            title: 'Galeria  periodo Helenistico',
            start: '2024-04-11T16:00:00',
            end: '2024-04-11T19:00:00',
            location: 'Teatro'
        },
        {
            title: 'Venta de obras y esculturas ',
            start: '2024-08-04T11:00:00',
            end: '2024-08-04T19:00:00',
            location: 'Sala de Conferencias B'
        }
    ];

    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();

    prevMonthDOM.addEventListener('click', () => lastMonth());
    nextMonthDOM.addEventListener('click', () => nextMonth());
    closeModal.addEventListener('click', () => eventModal.style.display = 'none');

    window.onclick = function(event) {
        if (event.target == eventModal) {
            eventModal.style.display = 'none';
        }
    }

    const writeMonth = (month) => {
        dates.innerHTML = '';

        for (let i = startDay(); i > 0; i--) {
            dates.innerHTML += `<div class="calendar__date calendar__item calendar__last-days">
                ${getTotalDays(monthNumber - 1) - (i - 1)}
            </div>`;
        }

        for (let i = 1; i <= getTotalDays(month); i++) {
            let dateStr = `${currentYear}-${String(monthNumber + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            let event = events.find(e => e.start.startsWith(dateStr));
            if (i === currentDay) {
                dates.innerHTML += `<div class="calendar__date calendar__item calendar__today" data-date="${dateStr}">
                    ${i}
                </div>`;
            } else if (event) {
                dates.inner
                dates.innerHTML += `<div class="calendar__date calendar__item event-day" data-date="${dateStr}">
                    ${i}
                </div>`;
            } else {
                dates.innerHTML += `<div class="calendar__date calendar__item" data-date="${dateStr}">
                    ${i}
                </div>`;
            }
        }

        document.querySelectorAll('.calendar__date').forEach(item => {
            item.addEventListener('click', () => {
                let dateStr = item.getAttribute('data-date');
                let event = events.find(e => e.start.startsWith(dateStr));
                if (event) {
                    eventTitle.textContent = event.title;
                    eventDate.textContent = new Date(event.start).toLocaleDateString();
                    eventTime.textContent = new Date(event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' - ' + new Date(event.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    eventLocation.textContent = event.location;
                    eventModal.style.display = 'block';
                }
            });
        });
    }

    const getTotalDays = month => {
        if (month === -1) month = 11;

        if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
            return 31;
        } else if (month == 3 || month == 5 || month == 8 || month == 10) {
            return 30;
        } else {
            return isLeap() ? 29 : 28;
        }
    }

    const isLeap = () => {
        return ((currentYear % 100 !== 0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
    }

    const startDay = () => {
        let start = new Date(currentYear, monthNumber, 1);
        return ((start.getDay() - 1) === -1) ? 6 : start.getDay() - 1;
    }

    const lastMonth = () => {
        if (monthNumber !== 0) {
            monthNumber--;
        } else {
            monthNumber = 11;
            currentYear--;
        }

        setNewDate();
    }

    const nextMonth = () => {
        if (monthNumber !== 11) {
            monthNumber++;
        } else {
            monthNumber = 0;
            currentYear++;
        }

        setNewDate();
    }

    const setNewDate = () => {
        currentDate.setFullYear(currentYear, monthNumber, currentDay);
        month.textContent = monthNames[monthNumber];
        year.textContent = currentYear.toString();
        writeMonth(monthNumber);
    }

    writeMonth(monthNumber);
