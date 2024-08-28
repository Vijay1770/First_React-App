function TodoItem2(){

  let TodoName='Go To college';
  let TodoDate='4/10/2024';
  return ( 
  <div class="container text-center">
    {/* 2nd row */}
    <div class="row">
      <div class="col-6">{TodoName}</div>
      <div class="col-4">{TodoDate}</div>
      <div class="col-2"><button type="button" class="btn btn-danger">ADD</button></div>
    </div>
    </div>
    )
}
export default TodoItem2;