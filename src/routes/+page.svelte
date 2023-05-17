<script>
  import FacilitatorBox from "../components/facilitatorBox.svelte";
  import StyleizedPreviewBox from "../components/styleizedPreviewBox.svelte"; 
  import { Grade } from "../scripts/grade";
  import peck from "../assets/531969_M 1.png" 
  import Space from "../components/utility/space.svelte";

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<StyleizedPreviewBox
  assignmentName="Persuasive Poetry" 
  imageUrl="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  hasGrade={true}
  gradeProvider={() => new Grade(4, 3)}
  imageOffset={200}
/>
<br/>
<FacilitatorBox
  teacherName="Jenna Peck"
  backgroundUrl="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
  pfpUrl={peck}
  className="English II"
/>
<Space size={25}/>
<FacilitatorBox
  teacherName="Sean Hughes"
  backgroundUrl="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
  pfpUrl={"https://media.licdn.com/dms/image/C4E03AQGDs0IeJ0kY7w/profile-displayphoto-shrink_800_800/0/1662045837301?e=2147483647&v=beta&t=OXnqgcwiWtHdzuGARFep9LJNst13Lhp3QehyDcE9SKY"}
  className="Engineering"
  period={2}
/>