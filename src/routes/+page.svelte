<script>
  import FacilitatorBox from "../components/facilitatorBox.svelte";
import StyleizedPreviewBox from "../components/styleizedPreviewBox.svelte";
  import { Grade } from "../scripts/grade";

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
  backgroundUrl=""
  pfpUrl=""
/>