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
	{
		component: () => import("@/views/DescriptionView.vue"),
		path: "/description",
	},
	{
		component: () => import("@/views/design.vue"),
		path: "/design",
	},
	{
		component: () => import("@/views/engineering.vue"),
		path: "/engineering",
	},
	{
		component: () => import("@/views/experiments.vue"),
		path: "/experiments",
	},
	{
		component: () => import("@/views/results.vue"),
		path: "/results",
	},
	{
		component: () => import("@/views/implementation.vue"),
		path: "/implementation",
	},
	{
		component: () => import("@/views/ContributionView.vue"),
		path: "/contribution",
	},
	{
		component: () => import("@/views/safety.vue"),
		path: "/safety",
	},
	{
		component: () => import("@/views/NotebookView.vue"),
		path: "/notebook",
	},
	{
		path: "/model",
		component: () => import("@/views/model.vue"),
	},
	{
		path: "/software",
		component: () => import("@/views/software.vue"),
	},
	{
		path: "/hardware",
		component: () => import("@/views/hardware.vue"),
	},
	{
		path: "/human-overview",
		component: () => import("@/views/human-overview.vue"),
	},
	{
		path: "/human-practice",
		component: () => import("@/views/human-practice.vue"),
	},
	{
		path: "/communication",
		component: () => import("@/views/communication.vue"),
	},
	{
		path: "/game",
		component: () => import("@/views/game.vue"),
	},
	{
		path: "/team",
		component: () => import("@/views/team.vue"),
	},
	{
		path: "/attributions",
		component: () => import("@/views/attributionsView.vue"),
	},
	{
		path: "/collaborations",
		component: () => import("@/views/collaborations.vue"),
	},
	{
		path: "/gold",
		component: () => import("@/views/gold.vue"),
	},
	{
		path: "/silver",
		component: () => import("@/views/silver.vue"),
	},
	{
		path: "/bronze",
		component: () => import("@/views/bronze.vue"),
	},
	{
		path: "/awards",
		component: () => import("@/views/awards.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
