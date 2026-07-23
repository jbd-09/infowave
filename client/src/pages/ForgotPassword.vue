<template>
  <div class="forgot-container">
    <h1>Reset Password</h1>

    <input type="text" placeholder="Username" />

    <input type="password" placeholder="New Password" />

    <input type="password" placeholder="Confirm Password" />

    <button>Reset Password</button>
  </div>
</template>

<style scoped>
.forgot-container{
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:15px;
  background:#F7F8FC;
}

input{
  width:300px;
  padding:12px;
}

button{
  width:300px;
  padding:12px;
  background:#7CB9E8;
  color:white;
  border:none;
  cursor:pointer;
}
</style>