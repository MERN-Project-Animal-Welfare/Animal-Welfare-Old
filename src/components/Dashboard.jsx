import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Welcome to the Animal Welfare Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/put-up-for-adoption">Put Up a Pet for Adoption</Link></li>
          <li><Link to="/adopt-pet">Adopt a Pet</Link></li>
          <li><Link to="/contact-vet">Contact a Vet</Link></li>
          <li><Link to="/report-animal">Report a Stray/Injured Animal</Link></li>
          <li><Link to="/volunteer">Volunteer Opportunities</Link></li>
        </ul>
      </nav>
    </div>
  );
}

function PutUpForAdoption() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    let obj = Object.fromEntries(new FormData(e.target).entries());
    console.log('Putting up for adoption', obj);
  };


  return (
    <div>
      <h2>Put Up a Pet for Adoption</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Pet Name:
          <input type="text" name="petName" />
        </label>
        <label>
          Species:
          <input type="text" name="species" />
        </label>
        <label>
          Age:
          <input type="number" name="age" />
        </label>
        <label>
          Description:
          <textarea name="description"></textarea>
        </label>
        <button type="submit">Submit for Adoption</button>
      </form>
    </div>
  );
}

function AdoptPet() {
  return (
    <div>
      <h2>Adopt a Pet</h2>
      <div>
        <h3>Available Pets</h3>
        <ul>
          <li>
            <h4>Buddy (Dog)</h4>
            <p>Age: 3 years</p>
            <p>Friendly golden retriever looking for a loving home.</p>
            <button>Request to Adopt</button>
          </li>
          <li>
            <h4>Whiskers (Cat)</h4>
            <p>Age: 2 years</p>
            <p>Playful tabby cat, great with children.</p>
            <button>Request to Adopt</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ContactVet() {
  return (
    <div>
      <h2>Contact a Vet</h2>
      <form>
        <label>
          Your Name:
          <input type="text" name="name" />
        </label>
        <label>
          Pet's Name:
          <input type="text" name="petName" />
        </label>
        <label>
          Issue Description:
          <textarea name="issue"></textarea>
        </label>
        <label>
          Preferred Contact Method:
          <select name="contactMethod">
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="video">Video Call</option>
          </select>
        </label>
        <button type="submit">Request Vet Consultation</button>
      </form>
    </div>
  );
}

function ReportAnimal() {
  return (
    <div>
      <h2>Report a Stray/Injured Animal</h2>
      <form>
        <label>
          Animal Type:
          <input type="text" name="animalType" />
        </label>
        <label>
          Location:
          <input type="text" name="location" />
        </label>
        <label>
          Condition:
          <textarea name="condition"></textarea>
        </label>
        <label>
          Your Contact Information:
          <input type="text" name="contactInfo" />
        </label>
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
}

function Volunteer() {
  return (
    <div>
      <h2>Volunteer Opportunities</h2>
      <ul>
        <li>
          <h3>Animal Shelter Assistant</h3>
          <p>Help with daily care of animals at our local shelter.</p>
          <button>Sign Up</button>
        </li>
        <li>
          <h3>Dog Walker</h3>
          <p>Take shelter dogs for walks and provide exercise.</p>
          <button>Sign Up</button>
        </li>
        <li>
          <h3>Fundraising Event Organizer</h3>
          <p>Help organize events to raise funds for animal welfare.</p>
          <button>Sign Up</button>
        </li>
      </ul>
    </div>
  );
}

export { Dashboard, PutUpForAdoption, AdoptPet, ContactVet, ReportAnimal, Volunteer };
