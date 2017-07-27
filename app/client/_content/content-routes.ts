
import { ContentRoutes } from '../content/index';

class Modules
{
  public components = [];
  public routes = [];

  constructor ()
  {
    this.routes = ContentRoutes;
    this.getComponents();
  }

  private getComponents ()
  {
    let checkers = [ this.routes ];
    for (let i = 0; i < checkers.length; ++i)
    {
      if (checkers[i])
      {
        checkers = checkers.concat(checkers[i].map(function(item){
          return item['children'];
        }));

        this.components = this.components.concat(checkers[i].map(function(item){
          return item['component'];
        }));
      }
    }

  }
}

export const modules = new Modules();
