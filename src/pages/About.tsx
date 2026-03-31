// Colors: primary #86975A | bg #F9FAFB | black #282828 | gray #919191 | secondary #E5EDCF

interface TeamMember { name: string; role: string; }
interface Value       { label: string; emoji: string; }

const teamMembers: TeamMember[] = [
  { name: "Team Member Name", role: "Role / Title" },
  { name: "Team Member Name", role: "Role / Title" },
  { name: "Team Member Name", role: "Role / Title" },
  { name: "Team Member Name", role: "Role / Title" },
  { name: "Team Member Name", role: "Role / Title" },
  { name: "Team Member Name", role: "Role / Title" },
];

const values: Value[] = [
  { label: "Sustainability", emoji: "🌍" },
  { label: "Innovation",     emoji: "💡" },
  { label: "Community",      emoji: "🤝" },
];

export default function About() {
  return (
    <>
      {/* ── Page Header — full height ───────────────────────── */}
      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#86975A] mb-3">
            About Us
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#282828] mb-16">
            Our Team.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-6">
                The <span className="text-[#86975A]">Team</span>
              </h2>
              {/* TODO: Replace with team intro */}
              <p className="text-sm text-[#919191] leading-relaxed mb-4">
                Introduce your team here. Who are the people behind Nurtura? What
                drives them? Share the story of how the team came together.
              </p>
              {/* TODO: Replace with mission copy */}
              <p className="text-sm text-[#919191] leading-relaxed">
                Add your team's mission, values, or background. Keep it warm,
                human, and authentic — let your personality come through.
              </p>
            </div>

            {/* Team photo placeholder */}
            <div className="bg-[#E5EDCF] rounded-3xl aspect-video flex flex-col items-center justify-center border-2 border-dashed border-[#86975A]/30 p-8 text-center">
              <div className="text-5xl mb-4">📸</div>
              <p className="text-sm font-semibold text-[#282828]">Team Photo</p>
              <p className="text-xs text-[#919191] mt-1">Replace with a team photo or group illustration</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Grid — full height ─────────────────────────── */}
      <section className="min-h-max bg-[#E5EDCF] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-14 text-center">
            Meet the People
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-[#F9FAFB] rounded-2xl p-6 flex flex-col items-center text-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 bg-[#E5EDCF] rounded-full flex items-center justify-center text-2xl text-[#86975A] font-black border-2 border-[#86975A]/20">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-[#282828] text-sm">{member.name}</h3>
                <p className="text-xs text-[#86975A] font-medium">{member.role}</p>
                {/* TODO: Replace with short bio */}
                <p className="text-xs text-[#919191] leading-relaxed">
                  Add a brief bio for this team member — their background, expertise, or a fun fact.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values — full height ────────────────────────────── */}
      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-14 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="flex flex-col gap-4 p-8 bg-[#E5EDCF] rounded-2xl">
                <div className="text-4xl">{value.emoji}</div>
                <h3 className="font-black text-[#282828] text-lg">{value.label}</h3>
                {/* TODO: Replace with value description */}
                <p className="text-xs text-[#919191] leading-relaxed">
                  Describe what this value means to your team and how it shows up in the work you do.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
