const Team = () => {
  const team = [
    {
      name: 'Kishore R',
      role: 'Founder & CEO',
      initials: 'KR',
      socials: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
    {
      name: 'Janagiraman',
      role: 'Lead Designer',
      initials: 'JR',
      socials: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        dribbble: 'https://dribbble.com',
      },
    },
    {
      name: 'Aakash S',
      role: 'Full-Stack Developer',
      initials: 'AS',
      socials: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
    {
      name: 'Sujitha',
      role: 'Marketing Lead',
      initials: 'SJ',
      socials: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
      },
    },
  ];

  const socialIcons = {
    twitter: '𝕏',
    linkedin: 'in',
    github: '⌨',
    dribbble: '◉',
    instagram: '📷',
  };

  return (
    <section className="team section" id="team">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Our Team</div>
          <h2 className="section-title">
            Meet the <span className="gradient-text">Creators</span>
          </h2>
          <p className="section-subtitle">
            A passionate team of designers, developers, and strategists
            committed to building exceptional digital experiences.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div className="glass-card team-card" key={index}>
              <div className="team-avatar">{member.initials}</div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="team-social">
                {Object.entries(member.socials).map(([platform, url]) => (
                  <a
                    href={url}
                    key={platform}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={platform}
                  >
                    {socialIcons[platform]}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
