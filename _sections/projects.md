---
title: Projects
slug: projects
order: 4
---

<div class="projects-container">
    {% assign projects = site.section-projects | sort: "order" %}
    {% for project in projects %} 
        <article class="projects-card">
            <div class ="projects-card-inner" id="projects-card-{{ project.order }}">
                <div class="projects-card-front">
                    <div class="projects-card-head">{{ project.name }}</div>
                    <div class="projects-card-img"><img src = "{{ project.image }}"></div>
                    <div class="projects-card-desc">{{ project.description }}</div>
                </div>
                <div class="projects-card-back">
                    <div class="projects-card-head">{{ project.name }}</div>
                    <div class="">{{ project.datedone }}</div>
                    <div class="">{{ project.tools }}</div>
                </div>
            </div>
        </article>
    {% endfor %}
</div>