export default function Contact() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-2xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-orange-600">Me contacter</h1>

      <p className="text-lg mb-4">
        Vous souhaitez échanger autour d’un projet, d’une opportunité ou simplement discuter tech ? N'hésitez pas à me contacter.
      </p>

      <ul className="text-lg space-y-2">
        <li>
          📧 Email : <a href="mailto:oceanebr@live.fr" className="text-orange-600 hover:underline">oceanebr@live.fr</a>
        </li>
        <li>
          💼 LinkedIn : <a href="https://www.linkedin.com/in/océane-***" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Mon profil LinkedIn</a>
        </li>
        <li>
          🗂️ CV : bientôt disponible !
        </li>
      </ul>

      {/* Future feature */}
      {/* <form className="mt-8">...formulaire ici si tu veux plus tard</form> */}
    </main>
  )
}
