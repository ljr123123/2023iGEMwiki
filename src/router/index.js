import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import contributionView from "../views/ContributionView.vue";
import descriptionView from "../views/DescriptionView.vue";
import notebookView from "../views/NotebookView.vue";
import attributionsView from "../views/attributionsView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/contribution",
		name: "contribution",
		component: contributionView,
	},
	{
		path: "/description",
		name: "description",
		component: descriptionView,
	},
	{
		path: "/notebook",
		name: "notebook",
		component: notebookView,
	},
	{
		path: "/attributions",
		name: "attributions",
		component: attributionsView,
	},
	{
		path: "/team",
		component: () => import("@/views/team.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
