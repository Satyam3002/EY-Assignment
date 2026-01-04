const MeetingScheduleCard = () => {
  const meetings = [
    { title: 'Call with Woods', date: '21 Jul', time: '08:20-10:30', avatar: '/avatar1.png', tag: 'Business', tagBg: 'bg-[#EDE7F6]', tagText: 'text-[#9155FD]' },
    { title: 'Call with hilda', date: '21 Jul', time: '08:20-10:30', avatar: '/avatar2.png', tag: 'Meditation', tagBg: 'bg-[#E8F5E9]', tagText: 'text-[#56CA00]' },
    { title: 'Conference call', date: '21 Jul', time: '08:20-10:30', avatar: '/avatar3.png', tag: 'Dinner', tagBg: 'bg-[#FFF8E1]', tagText: 'text-[#FFB400]' },
    { title: 'Meeting with Mark', date: '21 Jul', time: '08:20-10:30', avatar: '/avatar4.png', tag: 'Meetup', tagBg: 'bg-[#E3F2FD]', tagText: 'text-[#16B1FF]' },
    { title: 'Meeting in Oakland', date: '21 Jul', time: '08:20-10:30', avatar: '/avatar5.png', tag: 'Dinner', tagBg: 'bg-[#FFEBEE]', tagText: 'text-[#FF4C51]' },
    { title: 'Meeting with Carl', date: '21 Jul', time: '08:20-10:30', avatar: '/avatar6.png', tag: 'Business', tagBg: 'bg-[#EDE7F6]', tagText: 'text-[#9155FD]' },
  ];

  return (
    <div className="font-inter bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[rgba(58,53,65,0.87)]">Meeting Schedule</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      <div className="space-y-8">
        {meetings.map((meeting, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={meeting.avatar} alt={meeting.title} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="text-lg font-semibold text-[rgba(58,53,65,0.87)]">{meeting.title}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <img src="/calendaricon.svg" alt="Calendar" className="w-4 h-4" />
                  <span className="text-sm font-normal text-[rgba(58,53,65,0.87)]">{meeting.date} | {meeting.time}</span>
                </div>
              </div>
            </div>
            <span className={`text-xs font-normal px-3 py-1 rounded-full tracking-[0.14px] ${meeting.tagBg} ${meeting.tagText}`}>
              {meeting.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingScheduleCard;
