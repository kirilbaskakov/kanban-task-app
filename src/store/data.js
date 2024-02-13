const data = {
  boards: [
    {
      id: 1,
      name: "Roadmap",
      columns: [
        {
          id: 2,
          name: "HTML",
          tasks: [
            {
              id: 3,
              name: "learn basics",
              status: "HTML",
              subtasks: [
                {
                  id: 4,
                  name: "learn about tags",
                  completed: true,
                },
                {
                  id: 5,
                  name: "learn about audio/video tags",
                  completed: false,
                },
              ],
            },
            {
              id: 6,
              name: "HTML forms",
              status: "HTML",
              subtasks: [
                {
                  id: 7,
                  name: "form elements",
                  completed: true,
                },
                {
                  id: 8,
                  name: "input attributes",
                  completed: true,
                },
              ],
            },
          ],
        },
        {
          id: 9,
          name: "CSS",
          tasks: [
            {
              id: 10,
              name: "CSS basics",
              status: "CSS",
              subtasks: [
                {
                  id: 11,
                  name: "selectors",
                  completed: true,
                },
                {
                  id: 12,
                  name: "styles",
                  completed: true,
                },
              ],
            },
            {
              id: 13,
              name: "Adaptive design",
              status: "CSS",
              subtasks: [
                {
                  id: 14,
                  name: "media queries",
                  completed: true,
                },
                {
                  id: 15,
                  name: "flexbox/grid",
                  completed: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 16,
      name: "Todo",
      columns: [
        {
          id: 17,
          name: "high priority",
          tasks: [
            {
              id: 18,
              name: "create cv",
              status: "high priority",
              subtasks: [
                {
                  id: 19,
                  name: "load projects to github",
                  completed: true,
                },
                {
                  id: 20,
                  name: "add links to cv",
                  completed: false,
                },
              ],
            },
            {
              id: 21,
              name: "learn new thins",
              status: "high priority",
              subtasks: [
                {
                  id: 22,
                  name: "learn next.js",
                  completed: true,
                },
                {
                  id: 23,
                  name: "learn about react testing",
                  completed: true,
                },
              ],
            },
          ],
        },
        {
          id: 24,
          name: "low priority",
          tasks: [
            {
              id: 25,
              name: "prepare from exams",
              status: "low priority",
              subtasks: [
                {
                  id: 26,
                  name: "write a summary",
                  completed: false,
                },
                {
                  id: 27,
                  name: "learn",
                  completed: false,
                },
              ],
            },
            {
              id: 28,
              name: "prepare for interview",
              status: "low priority",
              subtasks: [
                {
                  id: 29,
                  name: "repeat css",
                  completed: true,
                },
                {
                  id: 30,
                  name: "repeat js",
                  completed: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default data;
