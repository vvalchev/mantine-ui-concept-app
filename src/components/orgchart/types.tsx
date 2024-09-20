export interface OrgNode<T> {
  data: T;
  childs?: OrgNode<T>[];
}
