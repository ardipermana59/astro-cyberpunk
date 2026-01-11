// Utility functions for content management
import { getCollection } from 'astro:content';

export interface BlogPost {
  title: string;
  date: string;
  tags: string[];
  image: string;
  summary: string;
  slug: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface PortfolioProject {
  title: string;
  date: string;
  tags: string[];
  image: string;
  summary: string;
  slug: string;
  demoUrl?: string;
  githubUrl?: string;
}

// Get all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog');

  return posts
    .map(post => ({
      ...post.data,
      slug: post.slug,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get all portfolio projects
export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const projects = await getCollection('portfolio');

  return projects
    .map(project => ({
      ...project.data,
      slug: project.slug,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get unique tags from blog posts
export async function getBlogTags(): Promise<string[]> {
  const posts = await getBlogPosts();
  const tags = new Set<string>();
  posts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
}

// Get unique tags from portfolio projects
export async function getPortfolioTags(): Promise<string[]> {
  const projects = await getPortfolioProjects();
  const tags = new Set<string>();
  projects.forEach(project => project.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
}

// Format date
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Get related posts
export function getRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[], limit = 3): BlogPost[] {
  return allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => ({
      post,
      score: post.tags.filter(tag => currentPost.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

// Get related projects
export function getRelatedProjects(
  currentProject: PortfolioProject,
  allProjects: PortfolioProject[],
  limit = 3
): PortfolioProject[] {
  return allProjects
    .filter(project => project.slug !== currentProject.slug)
    .map(project => ({
      project,
      score: project.tags.filter(tag => currentProject.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.project);
}
